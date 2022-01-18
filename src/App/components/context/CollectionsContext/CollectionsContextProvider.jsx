import CollectionsContext from './CollectionsContext';

const CollectionsContextProvider = ({ collectionsByPath, setCollectionsByPath, collectionsByAddress, setCollectionByAddress, childrenEl }) => {
    return (
        <CollectionsContext.Provider value={{
            collectionsByPath,
            setCollectionsByPath,
            collectionsByAddress,
            setCollectionByAddress
        }} children={childrenEl}></CollectionsContext.Provider>
    );
};

export default CollectionsContextProvider;