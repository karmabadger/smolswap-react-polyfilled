import { useContext } from 'react'


import { createTheme, styled, useTheme, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// import { handleConnect } from '../utils/wallet/web3wallet'

import WalletContext from './components/context/WalletContext/WalletContext'
import CartContext from './components/context/CartContext/CartContext'

// import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';

import { Routes, Route, Link, Navigate } from "react-router-dom";
import Collections from './routes/Collections'
import Checkout from './routes/Checkout'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';


function MUIApp({ themeType, setThemeType }) {

    // const { signer, setSigner } = useContext(WalletContext);

    const theme = useTheme()

    const cartContextObj = useContext(CartContext);

    // const handleConnectWallet = async () => {
    //     const newSigner = await handleConnect();
    //     setSigner(newSigner);
    // }

    // const printSigner = () => {
    //     console.log(signer);
    //     console.log(cartContextObj);
    // }

    // const printTheme = () => {
    //     console.log(theme, inputTheme);
    // }

    return (
        <div className="MUIApp">
            <CssBaseline />
            <Navbar />
            <Toolbar />
            <Routes>
                <Route exact path="/" element={<Navigate to="/collection/smolbrains" replace />} />
                <Route path="/collection"  >
                    <Route path=":collectionName" element={<Collections />} />
                </Route>
                <Route path="/checkout" element={<Checkout />} />
                {/* <Route path="/*" element={} /> */}
            </Routes>

            <Footer themeType={themeType} setThemeType={setThemeType} />

        </div >
    )
}

export default MUIApp
