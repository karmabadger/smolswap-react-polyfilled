import { createContext } from 'react';


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
    "maxTotalPrice": 0,
    "minSpendAmount": 0,
    "maxSuccess": 0,
    "maxFail": 0,
    "ERC1155Settings": {
        "insufficientQuantity": {
            "action": "skip",
        }
    },
    "failure": {
        "action": "skip",
    },
    "allFailure": {
        "action": "skip",
    },
}

const cartContextObj = {
    itemList: [],
    collections: {
        "mapping": {},
        addItem: (itemState) => {
            // if not in collections, add it
            if (!collections.mapping[itemState.collectionAddress]) {
                collections.mapping[itemState.collectionAddress] = {
                    name: '',
                    items: [],
                }
            }
            collections.mapping[itemState.collectionAddress].items.push(itemState);
        },
        removeItem: (itemState) => {
            collections.mapping[itemState.collectionAddress].items.splice(collections.mapping[itemState.collectionAddress].items.indexOf(itemState), 1);

            // if no more items in collection, remove it
            if (collections.mapping[itemState.collectionAddress].items.length === 0) {
                delete collections.mapping[itemState.collectionAddress];
            }
        }
    },
    settings: settings,
    addItem: (itemState) => {
        console.log("add:", itemState);

        // add to collections
        collections.addItem(itemState);

        // add to itemList
        itemList.push(itemState);

    },
    removeItem: (itemState) => {
        console.log("remove:", itemState);

        // remove from collections
        collections.removeItem(itemState);

        // remove from itemList
        itemList.splice(itemList.indexOf(itemState), 1);
    },
}


// functional design patterns cause it's 2022 bb!
// ok ok just splice...
const CartContext = createContext();

export default CartContext;

export {
    cartContextObj,
}