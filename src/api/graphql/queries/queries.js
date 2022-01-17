import { gql } from '@apollo/client';

function getCollections() {
    return gql`
    query getCollections {
      collections(orderBy: name) {
        address
        name
      }
    }`;
}


export { getCollections };