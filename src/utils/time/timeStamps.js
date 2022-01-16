

function getTimestampS(differenceInS) {
    return Math.floor((Date.now() / 1000)) + differenceInS
}

function getTimestampMs(differenceInMs) {
    return Math.floor(Date.now()) + differenceInMs
}

export { getTimestampS, getTimestampMs }