import { createContext } from 'react';
import { BigNumber } from 'ethers';

// const item = {
//     collectionAddress: "0x0",
//     tokenId: '',
//     type: "ERC721",
//     listedPrice: 0,
//     listedQuantity: 0,
//     maxPricePerItem: 0,
//     quantityOrdered: 0,
//     image: '',
//     seller: "0x0",
// }

// const collections = {
//     '0x0': {
//         name: '',
//         items: [item],
//     },
// }

const settings = {
    inputAsset: {
        name: 'MAGIC',
        type: 'ERC20',
        address: "0x0",
        symbol: 'MAGIC',
        decimals: 18,
        image: '',
    },
    DEXSettings: {
        DEXAddress: "0x0",
        DEXId: 0,
        DEXName: '',
        deadlineTime: 100, // in minutes
        slippagePercent: 2,
        refundInInputAsset: false,
    },
    defaults: {
        mode: "normal",
        maxPricePerItemIncreasePercent: 0,
        maxTotalPriceIncreasePercent: 0,
        minSpendAmountPercent: 100,
        maxSuccessPercent: 100,
        maxFailPercent: 100,
    },
    other: {
        buyNow: {
            marketplace: "treasure-marketplace", // or smolswap
        },
        pollInterval: 4000,
        approval: {
            infinite: true,
        },
    },

    // add x percent to the price of the item to get the max price per item by default
    ERC1155Settings: {
        insufficientQuantity: {
            action: "buyMax", // or skip
        }
    },
    failure: {
        first: {
            action: "skip",
        },
        all: {
            action: "skip",
        },
    }
}

const cartContextObj = {
    settings: settings,
    setSettings: function (newSettings) { },
    setSettingsByKey: function (key, value) { },
    itemList: [],
    collections: {
        mapping: {},
        addItem: function (itemState) {

            // if not in collections, add it
            if (!this.mapping[itemState.collectionAddress]) {
                this.mapping[itemState.collectionAddress] = {
                    name: '',
                    itemsMapping: {},
                }
            }

            // if not in itemsMapping, add it
            if (!this.mapping[itemState.collectionAddress].itemsMapping[itemState.tokenId]) {
                this.mapping[itemState.collectionAddress].itemsMapping[itemState.tokenId] = []
            }
            this.mapping[itemState.collectionAddress].itemsMapping[itemState.tokenId].push(itemState);
        },
        removeItem: function (itemState) {
            this.mapping[itemState.collectionAddress].itemsMapping[itemState.tokenId].splice(this.mapping[itemState.collectionAddress].itemsMapping[itemState.tokenId].indexOf(itemState), 1);

            // this.collections.mapping[itemState.collectionAddress].items.splice(this.collections.mapping[itemState.collectionAddress].items.indexOf(itemState), 1);

            // if no more items in collection, remove it
            if (this.mapping[itemState.collectionAddress].itemsMapping[itemState.tokenId].length === 0) {
                delete this.mapping[itemState.collectionAddress].itemsMapping[itemState.tokenId];
            }

            // if (this.collections.mapping[itemState.collectionAddress].items.length === 0) {
            //     delete this.collections.mapping[itemState.collectionAddress];
            // }
        }
    },
    getSelected: function (index) {
        return this.itemList[index].selected;
    },
    setSelected: function (index, selected) {
        this.itemList[index].selected = selected;
    },
    selectAll: function () {
        this.itemList.forEach(item => {
            item.selected = true;
        });
    },
    deselectAll: function () {
        this.itemList.forEach(item => {
            item.selected = false;
        });
    },
    getSelectedList: function () {
        let selectedList = [];
        for (let i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i].selected) {
                selectedList.push(this.itemList[i]);
            }
        }
        return selectedList;
    },
    getSelectedBooleanList: function () {
        let selectedList = [];
        for (let i = 0; i < this.itemList.length; i++) {
            selectedList.push(this.itemList[i].selected);
        }
        return selectedList;
    },
    getSelectedListTotalMaxPrice: function () {
        let totalPrice = BigNumber.from(0);
        for (let i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i].selected) {
                const maxPricePerItemBN = BigNumber.from(this.itemList[i].maxPricePerItem);
                const quantityBN = BigNumber.from(this.itemList[i].quantity);
                totalPrice = totalPrice.add(maxPricePerItemBN.mul(quantityBN));
            }
        }
        return totalPrice;
    },
    getSelectedListTotalPrice: function () {
        let totalPrice = BigNumber.from(0);
        for (let i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i].selected) {
                const pricePerItemBN = BigNumber.from(this.itemList[i].pricePerItem);
                const quantityBN = BigNumber.from(this.itemList[i].quantity);
                totalPrice = totalPrice.add(pricePerItemBN.mul(quantityBN));
            }
        }
        return totalPrice;
    },

    addItem: function (itemState) {
        // if item is erc721 and is already in cart, do nothing
        if (itemState.standard === 'ERC721' && this.checkIfItemInCart(itemState)) {
            return;
        }

        // if item is erc1155 and is already in cart, do nothing

        const BigNumberPricePerItem = BigNumber.from(itemState.pricePerItem);
        itemState.maxPricePerItem = BigNumberPricePerItem.add(BigNumberPricePerItem.mul(this.settings.maxPricePerItemDefaultIncreasePercent / 100)).toString();

        itemState.selected = true;

        // add to collections
        this.collections.addItem(itemState);

        // add to itemList
        this.itemList.push(itemState);

        // console.log("add:", itemState, this.itemList);
    },
    removeItem: function (itemState) {

        if (this.checkIfItemInCart(itemState)) {
            // remove from collections
            this.collections.removeItem(itemState);

            // remove from itemList
            this.itemList.splice(this.itemList.indexOf(itemState), 1);
            // console.log("remove:", itemState, this.itemList);
        }
    },
    removeAllItems: function () {
        const len = this.itemList.length;
        for (let i = 0; i < len; i++) {
            if (this.checkIfItemInCart(this.itemList[i])) {
                this.collections.removeItem(this.itemList[i]);
            }
        }
        this.itemList = [];
    },
    checkIfItemInCart: function (itemState) {
        // console.log("checkIfItemInCart:", itemState);
        if (this.collections.mapping[itemState.collectionAddress]) {
            const found = this.collections.mapping[itemState.collectionAddress].itemsMapping[itemState.tokenId];
            if (found) {
                if (found.length > 0) {
                    for (let i = 0; i < found.length; i++) {
                        if (found[i].owner === itemState.owner) {
                            return true;
                        }
                    }
                }
            }
        }

        return false;
    },

}


// functional design patterns cause it's 2022 bb!
// ok ok just splice...
const CartContext = createContext({
    // settings: settings,
    cart: cartContextObj,
});

export default CartContext;

export {
    settings,
    cartContextObj,
}