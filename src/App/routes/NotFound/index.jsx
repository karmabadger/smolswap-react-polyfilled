import { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';

import useNetwork from '../../../hooks/useNetwork';
// import { testnetInfo, mainnetInfo } from '../../../configs/network/network.js';

const NotFound = ({ networkName }) => {
    // const [network, setNetwork] = useNetwork(networkName);

    // useEffect(() => {
    //     if (networkName === "testnet" || networkName === "rinkeby") {
    //         setNetwork(testnetInfo);
    //     } else {
    //         setNetwork(mainnetInfo);
    //     }
    // }, [networkName]);

    // console.log("network", network);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <Typography variant='h2'>
                404 - Not Found
            </Typography>
        </Box>
    )
}


export default NotFound;