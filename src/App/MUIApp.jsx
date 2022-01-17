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

import { Routes, Route, Navigate } from "react-router-dom";
import Collections from './routes/Collections'
import Checkout from './routes/Checkout'
import NotFound from './routes/NotFound'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';


function MUIApp({ themeType, setThemeType }) {



    // const cartContextObj = useContext(CartContext);

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
                <Route path="/*" element={<NotFound />} />

                <Route path="/testnet/"  >
                    <Route exact path="" element={<Navigate to="/testnet/collection/smolbrains" replace />} />
                    <Route path="collection"  >
                        <Route path=":collectionName" element={<Collections networkName={"rinkeby"} />} />
                    </Route>
                    <Route path="checkout" element={<Checkout networkName={"rinkeby"} />} />
                    <Route path="*" element={<NotFound networkName={"rinkeby"} />} />
                </Route>
            </Routes>

            <Footer themeType={themeType} setThemeType={setThemeType} />

        </div >
    )
}

export default MUIApp
