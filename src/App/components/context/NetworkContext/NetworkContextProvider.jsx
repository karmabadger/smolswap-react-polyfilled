import NetworkContext from "./NetworkContext";

const NetworkContextProvider = ({ network, setNetwork, childrenEl }) => {
    return (
        <NetworkContext.Provider value={{ network, setNetwork }} children={childrenEl}></NetworkContext.Provider>
    );
};

export default NetworkContextProvider;