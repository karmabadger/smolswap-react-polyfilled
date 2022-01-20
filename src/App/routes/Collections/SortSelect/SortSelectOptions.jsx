

const SortSelectOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Latest",
    "Earliest",
    // "Newest to Oldest",
    // "Oldest to Newest",
    // "Token ID: Low to High",
    // "Token ID: High to Low",
    // "Rarity"
]

const SortSelectOptionsObj = {
    "Price: Low to High": {
        name: "pricePerItem",
        label: "Price: Low to High",
        direction: "asc",
        by: "listings",
    },
    "Price: High to Low": {
        name: "pricePerItem",
        label: "Price: High to Low",
        direction: "desc",
        by: "listings",
    },
    "Latest": {
        name: "blockTimestamp",
        label: "Latest",
        direction: "desc",
        by: "listings",
    },
    "Earliest": {
        name: "blockTimestamp",
        label: "Earliest",
        direction: "asc",
        by: "listings",
    }
}


const SortSelectOptionsERC1155 = [
    "Token ID Price: Low to High",
    "Token ID Price: High to Low",
    // "Listing Price: Low to High",
    // "Listing Price: High to Low",
    "Latest",
    "Earliest",
    // "Newest to Oldest",
    // "Oldest to Newest",
    // "Token ID: Low to High",
    // "Token ID: High to Low",
    // "Rarity"
]

const SortSelectOptionsERC1155Obj = {
    "Token ID Price: Low to High": {
        name: "pricePerItem",
        label: "Price: Low to High",
        direction: "asc",
        by: "tokens",
    },
    "Token ID Price: High to Low": {
        name: "pricePerItem",
        label: "Price: High to Low",
        direction: "desc",
        by: "tokens",
    },
    "Listing Price: Low to High": {
        name: "pricePerItem",
        label: "Price: Low to High",
        direction: "asc",
        by: "listings",
    },
    "Listing Price: High to Low": {
        name: "pricePerItem",
        label: "Price: High to Low",
        direction: "desc",
        by: "listings",
    },
    "Latest": {
        name: "blockTimestamp",
        label: "Latest",
        direction: "desc",
        by: "listings",
    },
    "Earliest": {
        name: "blockTimestamp",
        label: "Earliest",
        direction: "asc",
        by: "listings",
    }
}


export { SortSelectOptions, SortSelectOptionsObj, SortSelectOptionsERC1155, SortSelectOptionsERC1155Obj };