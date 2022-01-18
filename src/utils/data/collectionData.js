

function collectionNameToPath(collectionName) {
    return ((collectionName).toLowerCase()).replace(" ", "-")
}

function collectionPathToName(collectionPath) {
    return ((collectionPath).replace("-", " ")).replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export {
    collectionNameToPath,
    collectionPathToName
}