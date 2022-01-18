// import { useContext, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

// import NetworkContext from '../App/components/context/NetworkContext/NetworkContext';
import { testnetInfo, mainnetInfo } from '../configs/network/network.js';
function useNetwork(networkName) {
    const location = useLocation();
    console.log("location", location.pathname.split('/'));

    if (location.pathname.split('/')[1] === 'testnet') {
        return testnetInfo;
    } else {
        return mainnetInfo;
    }



    // const { network, setNetwork } = useContext(NetworkContext);

    // useEffect(() => {
    //     setNetwork(networkName === 'testnet' || networkName === 'rinkeby' ? testnetInfo : mainnetInfo);
    // }, []);
    // return [network, setNetwork];
}



export default useNetwork;