import { useState, useEffect } from 'react';

function getLocalStorageOrDefault(key, defaultValue) {
    const stored = window.localStorage.getItem(key);
    if (!stored) {
        return defaultValue;
    }
    return JSON.parse(stored);
}

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(
        getLocalStorageOrDefault(key, defaultValue)
    );

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}