
import { useState } from "react";
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

import DefaultsTabPanel from "./TabPanels/DefaultsTabPanel";
import InputTabPanel from "./TabPanels/InputTabPanel";
import UITabPanel from "./TabPanels/UITabPanel";

import { strWeiToETH, strETHToWei } from 'utils/erc/erc20utils.js';
import { getURL } from "utils/erc/metadataUtils.js";
import { BigNumber } from 'ethers';

import { testnetInfo, mainnetInfo } from 'configs/network/network.js';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { GET_TOKEN_DETAILS } from "api/graphql/queries/queries.js";



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

const SettingsModal = ({ handleClose, open }) => {

    const [tabValue, setTabValue] = useState(0);
    const handleChangeTabValue = (event, newValue) => {
        setTabValue(newValue);
    };


    return (
        <Dialog onClose={handleClose} open={open} >
            <DialogTitle>Settings</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Defaults Settings to be applied.
                </DialogContentText>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabValue} onChange={handleChangeTabValue} aria-label="basic tabs example">
                        <Tab label="Quick" {...a11yProps(0)} />
                        <Tab label="By Index" {...a11yProps(1)} />
                        <Tab label="Sweep" {...a11yProps(2)} />
                    </Tabs>
                </Box>

                <Box>
                    <InputTabPanel value={tabValue} index={0}
                    />
                    <DefaultsTabPanel value={tabValue} index={1}
                    />
                    <UITabPanel value={tabValue} index={2}
                    />
                </Box>

            </DialogContent>
        </Dialog>
    );
}

export default SettingsModal;