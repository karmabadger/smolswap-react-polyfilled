import { createContext } from 'react';

const CollectionsContext = createContext({
    collectionsByPath: {},
    setCollectionsByPath: (newCollectionsByPath) => { },
    collectionsByAddress: {},
    setCollectionsByAddress: (newCollectionsByAddress) => { },
});

export default CollectionsContext;