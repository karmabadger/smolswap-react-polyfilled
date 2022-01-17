

import { useState, useEffect, useContext } from 'react';

import NetworkContext from '../App/context/NetworkContext/NetworkContext';

function useCart() {
    const { network, setNetwork } = useContext(NetworkContext);

    // useEffect(() => {
    //     window.localStorage.setItem(key, JSON.stringify(value));
    // }, );

    return [network, setNetwork];
}

export default useCart;