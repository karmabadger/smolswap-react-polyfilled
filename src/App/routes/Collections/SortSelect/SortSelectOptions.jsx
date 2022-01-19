

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
        direction: "asc"
    },
    "Price: High to Low": {
        name: "pricePerItem",
        label: "Price: High to Low",
        direction: "desc"
    },
    "Latest": {
        name: "blockTimestamp",
        label: "Latest",
        direction: "desc"
    },
    "Earliest": {
        name: "blockTimestamp",
        label: "Earliest",
        direction: "asc"
    }
}


export { SortSelectOptions, SortSelectOptionsObj };