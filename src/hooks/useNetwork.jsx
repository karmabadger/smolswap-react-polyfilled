import { useContext, useEffect } from 'react';

import NetworkContext from '../App/components/context/NetworkContext/NetworkContext';
import { testnetInfo, mainnetInfo } from '../configs/network/network.js';
function useNetwork(networkName) {
    const { network, setNetwork } = useContext(NetworkContext);

    useEffect(() => {
        setNetwork(networkName === 'testnet' || networkName === 'rinkeby' ? testnetInfo : mainnetInfo);
    }, []);
    return [network, setNetwork];
}

export default useNetwork;