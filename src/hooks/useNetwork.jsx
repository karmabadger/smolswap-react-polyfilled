

import { useState, useEffect } from 'react';

import NetworkContext from '../App/context/NetworkContext/NetworkContext';

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(
        getLocalStorageOrDefault(key, defaultValue)
    );

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}