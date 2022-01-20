
function getURL(url) {
    const urlpath = url.split("/");
    let imgLink = "https://treasure-marketplace.mypinata.cloud/ipfs";

    for (let i = 0; i < urlpath.length; i++) {
        if (urlpath[i] === "ipfs" || urlpath[i] === "ipfs:" || urlpath[i] === "") {
            continue;
        } else if (urlpath[i] === "https:" || urlpath[i] === "http:") {
            imgLink = url;
            break;
        }
        else {
            imgLink += "/" + urlpath[i];
        }
    }
    return imgLink;
}


export { getURL };