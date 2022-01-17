fetch("https://api.thegraph.com/subgraphs/name/wyze/treasure-marketplace", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "sec-gpc": "1"
    },
    "referrer": "https://marketplace.treasure.lol/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"query\":\"query getCollectionStats($id: ID!) {\\n  collection(id: $id) {\\n    floorPrice\\n    totalListings\\n    totalVolume\\n    listings(where: {status: Active}) {\\n      token {\\n        floorPrice\\n        name\\n      }\\n    }\\n  }\\n}\",\"variables\":{\"id\":\"0x6325439389e0797ab35752b4f43a14c004f22a9c\"},\"operationName\":\"getCollectionStats\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
});


fetch("https://api.thegraph.com/subgraphs/name/wyze/treasure-marketplace", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "sec-gpc": "1"
    },
    "referrer": "https://marketplace.treasure.lol/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"query\":\"query getCollectionListings($id: ID!, $orderDirection: OrderDirection!, $tokenName: String, $skipBy: Int!, $first: Int!, $orderBy: Listing_orderBy!, $isERC1155: Boolean!, $filter: [String!]) {\\n  collection(id: $id) {\\n    name\\n    address\\n    standard\\n    tokens(\\n      orderBy: floorPrice\\n      orderDirection: $orderDirection\\n      where: {name_contains: $tokenName}\\n    ) @include(if: $isERC1155) {\\n      id\\n      name\\n      tokenId\\n      listings(where: {status: Active}, orderBy: pricePerItem) {\\n        pricePerItem\\n        quantity\\n      }\\n      metadata {\\n        image\\n        name\\n        description\\n      }\\n    }\\n    listings(\\n      first: $first\\n      skip: $skipBy\\n      orderBy: $orderBy\\n      orderDirection: $orderDirection\\n      where: {status: Active, tokenName_contains: $tokenName, filters_contains: $filter}\\n    ) @skip(if: $isERC1155) {\\n      user {\\n        id\\n      }\\n      expires\\n      id\\n      pricePerItem\\n      token {\\n        tokenId\\n        metadata {\\n          image\\n          name\\n          description\\n        }\\n        name\\n      }\\n      quantity\\n    }\\n  }\\n}\",\"variables\":{\"id\":\"0x6325439389e0797ab35752b4f43a14c004f22a9c\",\"isERC1155\":false,\"tokenName\":\"\",\"skipBy\":0,\"first\":42,\"filter\":[],\"orderBy\":\"pricePerItem\",\"orderDirection\":\"asc\"},\"operationName\":\"getCollectionListings\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
});



// single asset
fetch("https://api.thegraph.com/subgraphs/name/wyze/treasure-marketplace", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "sec-gpc": "1"
    },
    "referrer": "https://marketplace.treasure.lol/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"query\":\"query getTokenDetails($collectionId: ID!, $tokenId: BigInt!) {\\n  collection(id: $collectionId) {\\n    name\\n    standard\\n    tokens(where: {tokenId: $tokenId}) {\\n      tokenId\\n      lowestPrice: listings(\\n        where: {status: Active}\\n        first: 1\\n        orderBy: pricePerItem\\n        orderDirection: asc\\n      ) {\\n        ...ListingFieldsWithToken\\n      }\\n      metadata {\\n        attributes {\\n          attribute {\\n            id\\n            name\\n            percentage\\n            value\\n          }\\n        }\\n        description\\n        id\\n        image\\n        name\\n      }\\n      listings(orderBy: blockTimestamp, orderDirection: desc) {\\n        id\\n        status\\n        buyer {\\n          id\\n        }\\n        pricePerItem\\n        user {\\n          id\\n        }\\n        blockTimestamp\\n      }\\n      owner {\\n        id\\n      }\\n    }\\n  }\\n}\\n\\nfragment ListingFieldsWithToken on Listing {\\n  user {\\n    id\\n  }\\n  expires\\n  id\\n  pricePerItem\\n  quantity\\n}\",\"variables\":{\"collectionId\":\"0x6325439389e0797ab35752b4f43a14c004f22a9c\",\"tokenId\":\"10266\"},\"operationName\":\"getTokenDetails\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
});