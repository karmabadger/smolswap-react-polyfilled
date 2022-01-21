import { useContext } from 'react';

import WalletContext from 'App/components/context/WalletContext/WalletContext';

function useWallet() {
    const context = useContext(WalletContext);
    return context;
}

export default useWallet;