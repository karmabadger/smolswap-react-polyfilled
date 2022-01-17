// these don't work yet
// using the api/graphql/queries/queries.js file instead
// maybe useEffect could be used to update the query to save this?

import { useState, useEffect, useContext } from 'react';

import { gql, useQuery } from '@apollo/client';

import { testnetInfo, mainnetInfo } from 'configs/network/network.js';

function useQueryMagicPrice(query) {
    const { data, loading, error } = useQuery(query);
    if (loading) return { loading };
    if (error) return { error };
    return { data };
}


// function useQueryCollections(networkName = "mainnet") {
//     const [collections, setCollections] = useState([]);
//     const GET_COLLECTIONS = gql`
//       query getCollections {
//       collections(orderBy: name) {
//         address
//         name
//       }
//     }`

//     useEffect(() => {
//         const res = useQuery(GET_COLLECTIONS);
//         if (res.data) {
//             setCollections(res.data.collections)
//         }
//     }, [])

//     return collections;
// }

function useQueryCollection(query, networkName = "mainnet") {
    // const { data, loading, error } = useQuery(query);
    // if (loading) return { loading };
    // if (error) return { error };
    // return { data };
}

function useQueryAsset(query, networkName = "mainnet") {
    // const { data, loading, error } = useQuery(query);
    // if (loading) return { loading };
    // if (error) return { error };
    // return { data };
}

export { useQueryMagicPrice, useQueryCollections, useQueryCollection, useQueryAsset };