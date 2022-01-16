import { createContext } from 'react';

const NetworkContext = createContext({
    network: {},
    setNetwork: (newNetwork) => { },
});

export default NetworkContext;