import { useState, useContext, useEffects } from 'react'


import { createTheme, styled, useTheme, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// import { handleConnect } from '../utils/wallet/web3wallet'

// import WalletContext from './components/context/WalletContext/WalletContext'
// import CartContext from './components/context/CartContext/CartContext'

// import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';

import TimedAlert from "./components/Alerts/TimedAlert";
import TimedSnackbar from './components/Alerts/TimedSnackbar';
import AlertContextProvider from './components/context/AlertContext/AlertContextProvider'

import { Routes, Route, Navigate } from "react-router-dom";
import Collections from './routes/Collections'
import Checkout from './routes/Checkout'
import NotFound from './routes/NotFound'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

import CollectionsContextProvider from 'App/components/context/CollectionsContext/CollectionsContextProvider';

import { useQuery, gql } from '@apollo/client';
import { testnetInfo, mainnetInfo } from "configs/network/network.js";
import { GET_COLLECTIONS, GET_COLLECTION } from "api/graphql/queries/queries.js";

import { collectionNameToPath } from 'utils/data/collectionData.js'


import SettingsModal from './components/Modals/Settings/SettingsModal';
import QuickCheckoutModal from './components/Modals/QuickCheckout/QuickCheckoutModal';

function CollectionsLoadedApp({ collections, themeType, setThemeType }) {
    const collectionsByNameObj = {}

    collections.forEach(collection => {
        collectionsByNameObj[collectionNameToPath(collection.name)] = collection;
    });

    const collectionsByAddressObj = {}

    collections.forEach(collection => {
        collectionsByAddressObj[collection.address] = collection;
    });

    // console.log("collectionsByNameObj", collectionsByNameObj);

    const [collectionsByPath, setCollectionsByPath] = useState(collectionsByNameObj);
    const [collectionsByAddress, setCollectionsByAddress] = useState(collectionsByAddressObj);



    const [showTimedAlert, setShowTimedAlert] = useState(false);
    const [timedAlertVariant, setTimedAlertVariant] = useState("standard");
    const [timedAlertMessage, setTimedAlertMessage] = useState("");
    const [timedAlertSeverity, setTimedAlertSeverity] = useState("success");
    const [timedAlertTimeout, setTimedAlertTimeout] = useState(5000);
    const [timedAlertProgressBarActive, setTimedAlertProgressBarActive] = useState(true);

    const [showTimedSnackbar, setShowTimedSnackbar] = useState(false);
    const [timedSnackbarVariant, setTimedSnackbarVariant] = useState("standard");
    const [timedSnackbarMessage, setTimedSnackbarMessage] = useState("");
    const [timedSnackbarSeverity, setTimedSnackbarSeverity] = useState("success");
    const [timedSnackbarTimeout, setTimedSnackbarTimeout] = useState(5000);
    const [timedSnackbarProgressBarActive, setTimedSnackbarProgressBarActive] = useState(false);


    const [openQuickCheckoutModal, setOpenQuickCheckoutModal] = useState(false);
    const handleCloseQuickCheckoutModal = () => {
        setOpenQuickCheckoutModal(false);
    }

    const [openSettingsModal, setOpenSettingsModal] = useState(false);
    const handleCloseSettingsModal = () => {
        setOpenSettingsModal(false);
    }



    return (
        <CollectionsContextProvider
            collectionsByPath={collectionsByPath}
            setCollectionsByPath={setCollectionsByPath}
            collectionsByAddress={collectionsByAddress}
            setCollectionsByAddress={setCollectionsByAddress}

            childrenEl={
                <AlertContextProvider
                    showTimedAlert={showTimedAlert}
                    setShowTimedAlert={setShowTimedAlert}
                    timedAlertVariant={timedAlertVariant}
                    setTimedAlertVariant={setTimedAlertVariant}
                    timedAlertMessage={timedAlertMessage}
                    setTimedAlertMessage={setTimedAlertMessage}
                    timedAlertSeverity={timedAlertSeverity}
                    setTimedAlertSeverity={setTimedAlertSeverity}
                    timedAlertTimeout={timedAlertTimeout}
                    setTimedAlertTimeout={setTimedAlertTimeout}
                    timedAlertProgressBarActive={timedAlertProgressBarActive}
                    setTimedAlertProgressBarActive={setTimedAlertProgressBarActive}

                    showTimedSnackbar={showTimedSnackbar}
                    setShowTimedSnackbar={setShowTimedSnackbar}
                    timedSnackbarVariant={timedSnackbarVariant}
                    setTimedSnackbarVariant={setTimedSnackbarVariant}
                    timedSnackbarMessage={timedSnackbarMessage}
                    setTimedSnackbarMessage={setTimedSnackbarMessage}
                    timedSnackbarSeverity={timedSnackbarSeverity}
                    setTimedSnackbarSeverity={setTimedSnackbarSeverity}
                    timedSnackbarTimeout={timedSnackbarTimeout}
                    setTimedSnackbarTimeout={setTimedSnackbarTimeout}
                    timedSnackbarProgressBarActive={timedSnackbarProgressBarActive}
                    setTimedSnackbarProgressBarActive={setTimedSnackbarProgressBarActive}


                    childrenEl={
                        <div className="MUIApp">
                            <CssBaseline />

                            <Navbar
                                collections={collections}

                                openSettingsModal={openSettingsModal}
                                setOpenSettingsModal={setOpenSettingsModal}

                                openQuickCheckoutModal={openQuickCheckoutModal}
                                setOpenQuickCheckoutModal={setOpenQuickCheckoutModal}
                            />
                            <Toolbar />

                            {/* <Box> */}
                            <QuickCheckoutModal
                                open={openQuickCheckoutModal}
                                handleClose={handleCloseQuickCheckoutModal}
                            />
                            {/* </Box> */}

                            {/* <Box> */}
                            <SettingsModal
                                open={openSettingsModal}
                                handleClose={handleCloseSettingsModal}
                            />
                            {/* </Box> */}


                            {/* <Box> */}
                            {showTimedAlert && <TimedAlert
                                variant={timedAlertVariant}
                                message={timedAlertMessage}
                                severity={timedAlertSeverity}
                                timeout={timedAlertTimeout}
                                progressBarActive={timedAlertProgressBarActive}

                                setShowTimedAlert={setShowTimedAlert}
                            />}
                            {/* </Box> */}

                            <Box>
                                {showTimedSnackbar && <TimedSnackbar
                                    variant={timedSnackbarVariant}
                                    message={timedSnackbarMessage}
                                    severity={timedSnackbarSeverity}
                                    timeout={timedSnackbarTimeout}
                                    progressBarActive={timedSnackbarProgressBarActive}

                                    setShowTimedSnackbar={setShowTimedSnackbar}
                                />}
                            </Box>

                            <Routes>

                                <Route exact path="/" element={<Navigate to="/collection/smol-brains" replace />} />
                                <Route path="/collection"  >
                                    <Route path=":collectionName" element={<Collections collections={collections} />} />
                                </Route>
                                <Route path="/checkout" element={<Checkout collections={collections} />} />
                                <Route path="/*" element={<NotFound />} />

                                <Route path="/testnet/">
                                    <Route exact path="" element={<Navigate to="/testnet/collection/smol-brains" replace />} />
                                    <Route path="collection"  >
                                        <Route path=":collectionName" element={<Collections networkName={"rinkeby"} collections={collections} />} />
                                    </Route>
                                    <Route path="checkout" element={<Checkout networkName={"rinkeby"} collections={collections} />} />
                                    <Route path="*" element={<NotFound networkName={"rinkeby"} />} />
                                </Route>
                            </Routes>

                            <Footer themeType={themeType} setThemeType={setThemeType} />
                        </div >
                    }
                />
            } />
    )
}

function MUIApp({ themeType, setThemeType }) {

    let collections = [];


    const res = useQuery(GET_COLLECTIONS)

    if (res.loading) {
        if (collections.length > 0) {
            // console.log("collections", collections);
            collections = (res.data.collections).filter(collection => {
                // console.log("collection", collection, collection.address != 0);
                return collection.address != 0
            });
            return (<CollectionsLoadedApp collections={collections} themeType={themeType} setThemeType={setThemeType} />)
        }

        return (
            <div className="MUIApp">
                <CssBaseline />
                <Navbar collections={collections} />
                <Toolbar />
                <div>
                    loading...
                </div>
                <Footer themeType={themeType} setThemeType={setThemeType} />
            </div>
        )
    } else if (res.error) {
        console.log("error", res.error);
        return (<div>Error</div>)
    }
    else {
        if (res.data.collections) {

            collections = (res.data.collections).filter(collection => {
                return collection.address != 0
            });
            return (<CollectionsLoadedApp collections={collections} themeType={themeType} setThemeType={setThemeType} />)
        }
    }
}

export default MUIApp
