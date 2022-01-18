import { gql } from '@apollo/client';

const GET_COLLECTIONS = gql`
query getCollections {
    collections(orderBy: name) {
        address
        name
    }
}`;


// requires:
// $id: String!
const GET_COLLECTION_STATS = gql`
query getCollectionStats($id: ID!) {
    collection(id: $id) {
        floorPrice
        totalListings
        totalVolume
        listings(where: {status: Active}) {
            token {
                floorPrice
                name
            }
        }
    }
}`

// variables: {
//     id: '0x6325439389e0797ab35752b4f43a14c004f22a9c',
//     isERC1155: false,
//     tokenName: '',
//     skipBy: 0,
//     first: 42,
//     filter: [],
//     orderBy: 'pricePerItem',
//     orderDirection: 'asc'
//   },
const GET_COLLECTION_LISTINGS = gql`
query getCollectionListings($id: ID!, $orderDirection: OrderDirection!, $tokenName: String, $skipBy: Int!, $first: Int!, $orderBy: Listing_orderBy!, $isERC1155: Boolean!, $filter: [String!]) {
    collection(id: $id) {
        name
        address
        standard
        tokens(
        orderBy: floorPrice
        orderDirection: $orderDirection
        where: {name_contains: $tokenName}
        ) @include(if: $isERC1155) {
        id
        name
        tokenId
        listings(where: {status: Active}, orderBy: pricePerItem) {
            pricePerItem
            quantity
        }
        metadata {
            image
            name
            description
        }
        }
        listings(
        first: $first
        skip: $skipBy
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: {status: Active, tokenName_contains: $tokenName, filters_contains: $filter}
        ) @skip(if: $isERC1155) {
        user {
            id
        }
        expires
        id
        pricePerItem
        token {
            tokenId
            metadata {
            image
            name
            description
            }
            name
        }
        quantity
        }
    }
}
`

// variables: { id: '0x6325439389e0797ab35752b4f43a14c004f22a9c' },
const GET_COLLECTION_INFO = gql`
query getCollectionInfo($id: ID!) {
  collection(id: $id) {
    id
    name
    standard
    attributes {
      name
      percentage
      value
    }
  }
}
`


// variables: {
//     collectionId: '0x6325439389e0797ab35752b4f43a14c004f22a9c',
//     tokenId: '10266'
//   }
const GET_TOKEN_DETAILS = gql`
query getTokenDetails($collectionId: ID!, $tokenId: BigInt!) {
    collection(id: $collectionId) {
        name
        standard
        tokens(where: { tokenId: $tokenId }) {
            tokenId
            lowestPrice: listings(
                where: { status: Active }
        first: 1
        orderBy: pricePerItem
        orderDirection: asc
            ) {
        ...ListingFieldsWithToken
            }
      metadata {
        attributes {
          attribute {
                        id
                        name
                        percentage
                        value
                    }
                }
                description
                id
                image
                name
            }
            listings(orderBy: blockTimestamp, orderDirection: desc) {
                id
                status
        buyer {
                    id
                }
                pricePerItem
        user {
                    id
                }
                blockTimestamp
            }
      owner {
                id
            }
        }
    }
}

fragment ListingFieldsWithToken on Listing {
  user {
        id
    }
    expires
    id
    pricePerItem
    quantity
}
`



export { GET_COLLECTIONS, GET_COLLECTION_STATS, GET_COLLECTION_LISTINGS, GET_COLLECTION_INFO, GET_TOKEN_DETAILS };