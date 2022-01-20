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


import ListingsTabPanel from "./TabPanels/ListingsTabPanel";
import AttributesTabPanel from "./TabPanels/AttributesTabPanel";
import DetailsTabPanel from "./TabPanels/DetailsTabPanel";
import ActivityTabPanel from "./TabPanels/ActivityTabPanel";
import RarityTabPanel from "./TabPanels/RarityTabPanel";

import { strWeiToETH, strETHToWei } from 'utils/erc/erc20utils.js';
import { getURL } from "utils/erc/metadataUtils.js";
import { BigNumber } from 'ethers';

import { testnetInfo, mainnetInfo } from 'configs/network/network.js';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { GET_TOKEN_DETAILS } from "api/graphql/queries/queries.js";


import smol from "__mock_data__/img/smol.png";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

const ERC721ModalCard = ({ id, item, collection, addedState, handleAddToCart, handleRemoveFromCart }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // console.log("collection", collection);


    const collectionId = (collection && collection.address) ? collection.address : "0x0";
    const tokenId = (item && item.token && item.token.tokenId) ? item.token.tokenId : "0";

    // console.log("collectionId", collectionId);
    // console.log("tokenId", tokenId);
    const { data, error, loading } = useQuery(GET_TOKEN_DETAILS, {
        variables: {
            collectionId: collectionId,
            tokenId: tokenId,
        },
        pollInterval: 4000,
    })

    // console.log('data attributes', data, collection)

    console.log("item", item);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error! {error.message}</div>;
    }

    const token = data.collection.tokens[0]

    console.log("token", token, token.listings[0].blockTimestamp);

    return (
        <Box>
            <Card sx={{ width: "500px" }}>
                <CardMedia component="img" alt="green iguana" image={getURL(item.token.metadata.image)} />
                <CardContent
                    style={{ paddingBottom: "21px" }}
                    sx={{
                        px: "16px"
                    }}
                >
                    <Typography variant="h4">{item.token.name}</Typography>
                    <Box sx={{ width: "100%", my: "16px" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="Card tabs"
                            >
                                <Tab label="Listings" {...a11yProps(0)} />
                                <Tab label="Attributes" {...a11yProps(1)} />
                                <Tab label="Details" {...a11yProps(2)} />
                                <Tab label="Activity" {...a11yProps(3)} />
                                <Tab label="Rarity" {...a11yProps(4)} />
                            </Tabs>
                        </Box>

                        <ListingsTabPanel value={value} index={0} item={item} token={token} />
                        <AttributesTabPanel value={value} index={1} item={item} token={token} />
                        <DetailsTabPanel value={value} index={2} item={item} token={token} />
                        <ActivityTabPanel value={value} index={3} item={item} token={token} />
                        <RarityTabPanel value={value} index={4} item={item} token={token} />
                    </Box>

                    <Box>
                        <Button color="primary">Buy Now</Button>
                        <Button color="primary">Link</Button>
                        {
                            (addedState) ?
                                <IconButton
                                    onClick={handleRemoveFromCart}
                                    sx={{
                                        py: "0px",
                                        px: "0px",
                                        marginLeft: "8px"
                                    }}
                                    aria-label="add-to-cart"
                                >
                                    <RemoveShoppingCartIcon size="large" fontSize="inherit" color="primary" />
                                </IconButton >
                                :
                                <IconButton
                                    onClick={handleAddToCart}
                                    sx={{
                                        py: "0px",
                                        px: "0px",
                                        marginLeft: "8px"
                                    }}
                                    aria-label="add-to-cart"
                                >
                                    <AddShoppingCartIcon size="large" fontSize="inherit" color="primary" />
                                </IconButton>
                        }
                    </Box>

                </CardContent>
            </Card>
        </Box>
    );
    // }

    // return (
    //     <Box>
    //     </Box>
    // )

};

const ERC721Modal = ({ open, handleClose, id, item, collection, addedState, handleAddToCart, handleRemoveFromCart }) => {
    // const [open, setOpen] = React.useState(false);
    // const [selectedValue, setSelectedValue] = useState();

    return (
        <Dialog onClose={handleClose} open={open} >
            <ERC721ModalCard id={id} item={item} collection={collection}
                addedState={addedState}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
            />
        </Dialog>
    );
}

export default ERC721Modal;