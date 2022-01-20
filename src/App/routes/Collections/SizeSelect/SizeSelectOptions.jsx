

const SizeSelectOptions = [
    "SM",
    "MD",
    // "LG",
]

const CardSizes = {
    "XS": {
        index: 0,
        width: '100%',
        height: '100%',
    },
    "SM": {
        ERC721: {
            width: '128px',
            height: '222px',
            widthPixel: 128,
            heightPixel: 222,
            minMarginX: 2,
            maxMarginX: 5,
            minMarginY: 5,
        },
        ERC1155: {
            width: '128px',
            height: '229px',
            widthPixel: 128,
            heightPixel: 229,
            minMarginX: 2,
            maxMarginX: 5,
            minMarginY: 5,
        },
        index: 1,
        width: '128px',
        height: '222px',
        widthPixel: 128,
        heightPixel: 222,
        minMarginX: 2,
        maxMarginX: 5,
        minMarginY: 5,
        batchSize: 84,
    },
    "MD": {
        ERC721: {
            width: '256px',
            height: '406px',
            widthPixel: 256,
            heightPixel: 406,
            minMarginX: 5,
            minMarginY: 14,
        },
        ERC1155: {
            width: '256px',
            height: '427px',
            widthPixel: 256,
            heightPixel: 427,
            minMarginX: 5,
            minMarginY: 10,
        },
        index: 2,
        width: '256px',
        height: '406px',
        widthPixel: 256,
        heightPixel: 406,
        minMarginX: 5,
        minMarginY: 14,
        batchSize: 42,
    },
    "LG": {
        index: 3,
        width: '25%',
        height: '25%',
    },
}

export { SizeSelectOptions, CardSizes }