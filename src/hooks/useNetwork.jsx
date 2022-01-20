// import { useContext, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

// import NetworkContext from '../App/components/context/NetworkContext/NetworkContext';
import { testnetInfo, mainnetInfo } from '../configs/network/network.js';
function useNetwork(networkName) {
    const location = useLocation();
    if (location.pathname.split('/')[1] === 'testnet') {
        return testnetInfo;
    } else {
        return mainnetInfo;
    }
}



export default useNetwork;