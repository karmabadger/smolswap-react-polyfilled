import WalletContext from "./WalletContext";

const WalletContextProvider = ({ web3Modal, signer, setSigner, childrenEl }) => {
    return (
        <WalletContext.Provider value={{ web3Modal, signer, setSigner }} children={childrenEl}></WalletContext.Provider>
    );
};

export default WalletContextProvider;