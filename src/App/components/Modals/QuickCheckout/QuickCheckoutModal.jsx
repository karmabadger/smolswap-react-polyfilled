
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import ListItemIcon from "@mui/material/ListItemIcon";

import CloseIcon from "@mui/icons-material/Close";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import Popper from "@mui/material/Popper";

import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import ClickAwayListener from "@mui/base/ClickAwayListener";


// import ListingsTabPanel from "./TabPanels/ListingsTabPanel";
// import AttributesTabPanel from "./TabPanels/AttributesTabPanel";
// import DetailsTabPanel from "./TabPanels/DetailsTabPanel";
// import ActivityTabPanel from "./TabPanels/ActivityTabPanel";
// import RarityTabPanel from "./TabPanels/RarityTabPanel";

import { strWeiToETH, strETHToWei } from 'utils/erc/erc20utils.js';
import { getURL } from "utils/erc/metadataUtils.js";
import { BigNumber } from 'ethers';

import { testnetInfo, mainnetInfo } from 'configs/network/network.js';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { GET_TOKEN_DETAILS } from "api/graphql/queries/queries.js";


import useCart from "hooks/useCart";

import CartTabPanel from "./TabPanels/CartTabPanel/CartTabPanel";
import SettingsTabPanel from "./TabPanels/SettingsTabPanel/SettingsTabPanel";
import ReviewTabPanel from "./TabPanels/ReviewTabPanel/ReviewTabPanel";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

function checkIfAllTrue(checkList) {
    for (let i = 0; i < checkList.length; i++) {
        if (!checkList[i]) {
            return false;
        }
    }
    return true;
}

function getNumberOfTrue(checkList) {
    let count = 0;
    for (let i = 0; i < checkList.length; i++) {
        if (checkList[i]) {
            count++;
        }
    }
    return count;
}

const QuickCheckoutModal = ({ handleClose, open }) => {

    const [tabValue, setTabValue] = useState(0);
    const handleChangeTabValue = (event, newValue) => {
        setTabValue(newValue);
    };


    const cart = useCart();

    const [selectedList, setSelectedList] = useState(cart.cartContextObj.getSelectedBooleanList());

    // console.log("selectedListup", selectedList, cart.cartContextObj.getSelectedBooleanList());
    const [allTrue, setAllTrue] = useState(checkIfAllTrue(selectedList));
    const [numberOfTrue, setNumberOfTrue] = useState(getNumberOfTrue(selectedList));

    const [openSureModal, setOpenSureModal] = useState(false);

    useEffect(() => {
        if (cart.cartContextObj.itemList.length === 0) {
            setSelectedList([]);
        }
        setSelectedList(cart.cartContextObj.getSelectedBooleanList());
    }, [cart.cartContextObj.itemList.length]);

    useEffect(() => {
        setAllTrue(checkIfAllTrue(selectedList));
        setNumberOfTrue(getNumberOfTrue(selectedList));
    }, [selectedList, cart.cartContextObj.itemList.length]);

    const handleSelectAll = () => {
        if (!allTrue) {
            setSelectedList(selectedList.map(() => true));
        }
    }

    const handleDeselectAll = () => {
        setSelectedList(selectedList.map(() => false));
    }

    const handleRemoveAll = () => {
        console.log('remove all');
        cart.cartContextObj.removeAllItems();
        setSelectedList([]);
    };

    const handleClickRemoveAll = () => {
        setOpenSureModal(true);
        // console.log('remove all');
        // cart.cartContextObj.removeAllItems();
        // setSelectedList([]);
    };


    return (
        <Dialog
            fullScreen
            onClose={handleClose} open={open} >
            <DialogTitle
            // disableTypography
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                    }}>
                    <Box
                        sx={{
                            flexGrow: 2,
                        }}>
                        <Typography
                            variant="h3">
                            Quick Checkout
                        </Typography>
                    </Box>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabValue} onChange={handleChangeTabValue} aria-label="basic tabs example">
                        <Tab label="Cart" {...a11yProps(0)} />
                        <Tab label="Settings" {...a11yProps(1)} />
                        <Tab label="Checkout" {...a11yProps(2)} />
                    </Tabs>
                </Box>

                <Box>
                    <CartTabPanel
                        value={tabValue}
                        index={0}

                        handleSelectAll={handleSelectAll}
                        handleDeselectAll={handleDeselectAll}
                        handleRemoveAll={handleRemoveAll}
                        handleClickRemoveAll={handleClickRemoveAll}

                        selectedList={selectedList}
                        numberOfTrue={numberOfTrue}
                        setSelectedList={setSelectedList}

                        openSureModal={openSureModal}
                        setOpenSureModal={setOpenSureModal}

                    />

                    <SettingsTabPanel
                        value={tabValue}
                        index={1}
                    />

                    {
                        open &&
                        (
                            <ReviewTabPanel
                                value={tabValue}
                                index={2}
                                numberOfTrue={numberOfTrue}
                                selectedList={selectedList}
                            />
                        )
                    }
                </Box>

            </DialogContent>
        </Dialog>
    );
}

export default QuickCheckoutModal;