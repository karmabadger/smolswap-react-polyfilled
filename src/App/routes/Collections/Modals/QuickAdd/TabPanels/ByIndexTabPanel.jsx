import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import ListItemIcon from "@mui/material/ListItemIcon";

import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

import { testnetInfo, mainnetInfo } from 'configs/network/network.js';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { GET_COLLECTIONS, GET_COLLECTION_STATS, GET_COLLECTION_INFO, GET_COLLECTION_LISTINGS, GET_COLLECTION_LISTINGS_ERC1155 } from "api/graphql/queries/queries.js";

import useCart from 'hooks/useCart.jsx';

import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import TabPanel from "./TabPanel";

const ByIndexTabPanel = ({
    value, index,
    collection,
    listings,
    attributesChosenList,
    searchList,
    page,
    batchSize,
    sortByObj,
    ercType,
    handleClose,
}) => {

    const [loadListings, { loading, error, data, called }] = useLazyQuery(GET_COLLECTION_LISTINGS);

    const cart = useCart();


    const [startIndex, setStartIndex] = useState(0);
    const handleOnChangeStartIndex = (event) => {
        if (event.target.value >= 0) {
            setStartIndex(event.target.value);
        }
    };

    const [endIndex, setEndIndex] = useState(0);
    const handleOnChangeEndIndex = (event) => {
        if (event.target.value >= 0) {
            setEndIndex(event.target.value);
        }
    };


    if (called) {
        if (loading) {
            return (
                <TabPanel value={value} index={index} >
                    <Box
                        component="form"
                        sx={{
                            my: "14px",
                            display: 'flex',
                            flexDirection: 'row',
                            width: 'fit-content',
                            gap: '5px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <div>
                            loading...
                        </div>
                    </Box>
                </TabPanel>
            )
        } else if (error) {
            return (
                <TabPanel value={value} index={index} >
                    <Box
                        component="form"
                        sx={{
                            my: "14px",
                            display: 'flex',
                            flexDirection: 'row',
                            width: 'fit-content',
                            gap: '5px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <div>
                            error... {error.message}
                        </div>
                    </Box>
                </TabPanel>
            )
        } else {
            // called and successful
            console.log("data", data);

            if (data) {
                if (data.collection) {
                    if (data.collection.listings) {
                        if (data.collection.listings.length > 0) {
                            for (let i = 0; i < data.collection.listings.length; i++) {
                                const item = data.collection.listings[i];

                                const OrderData = {
                                    name: item.token.name,
                                    collectionAddress: item.id,
                                    tokenId: item.token.tokenId,
                                    metadata: item.token.metadata,
                                    expires: item.expires,
                                    pricePerItem: item.pricePerItem,
                                    quantity: 1,
                                    owner: item.user.id,
                                    standard: "ERC721"
                                }

                                // console.log("cart", cart.cartContextOj);
                                cart.cartContextObj.addItem(OrderData);

                            }
                            // handleClose();
                            return (
                                <TabPanel value={value} index={index} >
                                    <Box
                                        component="form"
                                        sx={{
                                            my: "14px",
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: 'fit-content',
                                            gap: '5px',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        <div>
                                            {data.collection.listings.length} items to cart
                                        </div>
                                    </Box>
                                </TabPanel>
                            )
                        }
                    }
                }

            }
            return (
                <TabPanel value={value} index={index} >
                    <Box
                        component="form"
                        sx={{
                            my: "14px",
                            display: 'flex',
                            flexDirection: 'row',
                            width: 'fit-content',
                            gap: '5px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <div>
                            No listings found
                        </div>
                    </Box>
                </TabPanel>
            )
        }
    }


    function handleOnKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            fetchListings(event);
        }
    }

    function fetchListings(event) {
        // console.log("fetchListings", numberValue);
        const startIndexInt = parseInt(startIndex);
        const endIndexInt = parseInt(endIndex);

        if (startIndexInt <= endIndexInt) {
            loadListings({
                variables: {
                    id: collection.address,
                    isERC1155: (ercType === "ERC1155"),
                    tokenName: (searchList.length > 0) ? searchList[0] : "",
                    skipBy: startIndexInt,
                    first: (endIndexInt - startIndexInt) + 1,
                    filter: attributesChosenList,
                    orderBy: sortByObj.name,
                    orderDirection: sortByObj.direction,
                }
            });
        } else {
            // console.log("startIndexInt <= endIndexInt");
            window.alert("start index must be less than or equal to end index");
        }
    }

    return (
        <TabPanel value={value} index={index} >
            <Box
                // noValidate
                component="form"
                sx={{
                    my: "14px",
                    display: 'flex',
                    flexDirection: 'row',
                    width: 'fit-content',
                    gap: '5px',
                    flexWrap: 'wrap',
                }}
            >
                <Box
                    sx={{
                        flexGrow: 1,
                        minWidth: '100px',
                        width: '40%',
                        // width: "30%",
                    }}>
                    <TextField
                        id="outlined-number"
                        label="Start Index"
                        size="small"
                        type="number"
                        value={startIndex}
                        onChange={handleOnChangeStartIndex}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onKeyDown={handleOnKeyDown}
                    />
                </Box>

                <Box
                    sx={{
                        flexGrow: 2,
                        minWidth: '100px',
                        width: '40%',
                    }}>
                    <TextField
                        id="outlined-number"
                        label="End Index"
                        size="small"
                        type="number"
                        value={endIndex}
                        onChange={handleOnChangeEndIndex}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onKeyDown={handleOnKeyDown}
                    />
                </Box>
                <Box>
                    <Button
                        color="secondary"
                        variant="contained"
                        size="large"
                        onClick={fetchListings}
                    >
                        Add
                    </Button>
                </Box>
            </Box>
        </TabPanel>
    )
}

export default ByIndexTabPanel;