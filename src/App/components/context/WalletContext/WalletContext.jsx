import { createContext } from 'react';

import { infuraId, providerOptions, web3Modal } from '../../../../utils/wallet/web3wallet.js';

const WalletContext = createContext({
    web3Modal: web3Modal,
    signer: null,
    setSigner: (newSigner) => { },
});

export default WalletContext;