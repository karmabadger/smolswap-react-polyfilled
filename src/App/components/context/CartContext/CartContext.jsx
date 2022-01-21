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
        address: "0x0",
        symbol: 'MAGIC',
        decimals: 18,
        image: '',

    },
    DEXSettings: {
        DEXAddress: "0x0",
        DEXName: '',
        slippage: 0,
        refundInInputAsset: false,
    },
    mode: "sweep",
    maxTotalPrice: 0,

    // add x percent to the price of the item to get the max price per item by default
    maxPricePerItemDefaultIncreasePercent: 0,
    minSpendAmount: 0,
    maxSuccess: 0,
    maxFail: 0,
    ERC1155Settings: {
        insufficientQuantity: {
            action: "skip",
        }
    },
    failure: {
        action: "skip",
    },
    allFailure: {
        action: "skip",
    },
}

const cartContextObj = {
    settings: settings,
    itemList: [],
    collections: {
        mapping: {},
        addItem: function (itemState) {

            // if item is erc721 and is already in cart, do nothing
            if (itemState.standard === 'ERC721' && this.checkIfItemInCart(itemState)) {
                return;
            }

            // if item is erc1155 and is already in cart, do nothing

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
    addItem: function (itemState) {

        const BigNumberPricePerItem = BigNumber.from(itemState.pricePerItem);
        itemState.maxPricePerItem = BigNumberPricePerItem.add(BigNumberPricePerItem.mul(this.settings.maxPricePerItemDefaultIncreasePercent / 100)).toString();

        // add to collections
        this.collections.addItem(itemState);

        // add to itemList
        this.itemList.push(itemState);

        // console.log("add:", itemState, this.itemList);
    },
    removeItem: function (itemState) {

        // remove from collections
        this.collections.removeItem(itemState);

        // remove from itemList
        this.itemList.splice(this.itemList.indexOf(itemState), 1);
        // console.log("remove:", itemState, this.itemList);
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