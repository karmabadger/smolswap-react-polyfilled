import WalletContext from "./WalletContext";

import getContract from "contracts/treasure-marketplace/contract";


const WalletContextProvider = ({
    web3Modal,
    signer,
    setSigner,
    treasureMarketplace,
    smolswap,
    childrenEl
}) => {
    return (
        <WalletContext.Provider value={{ web3Modal, signer, setSigner, treasureMarketplace, smolswap }} children={childrenEl}></WalletContext.Provider>
    );
};

export default WalletContextProvider;