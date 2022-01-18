import { useContext } from 'react';

import { collectionNameToPath } from 'utils/data/collectionData';

import CollectionsContext from 'App/components/context/CollectionsContext/CollectionsContext';

function useFindCollection() {
    const { collectionsByPath, collectionsByAddress } = useContext(CollectionsContext);

    const getCollectionByName = (collectionName) => {
        const collectionPath = collectionNameToPath(collectionName);
        return collectionsByPath[collectionPath];
    };

    return { collectionsByPath, collectionsByAddress, getCollectionByName };
}

export default useFindCollection;