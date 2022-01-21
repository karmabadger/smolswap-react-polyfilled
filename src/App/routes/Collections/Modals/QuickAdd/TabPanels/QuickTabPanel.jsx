
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

const QuickTabPanel = ({
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

    const [numberValue, setNumberValue] = useState(0);
    const handleOnChangeNumberValue = (event) => {
        if (event.target.value.length > 0) {
            setNumberValue(event.target.value);
        }
    }

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
                                            Added {data.collection.listings.length} items to cart
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
        const numInt = parseInt(numberValue);

        console.log("fetchListings int", numInt);
        loadListings({
            variables: {
                id: collection.address,
                isERC1155: (ercType === "ERC1155"),
                tokenName: (searchList.length > 0) ? searchList[0] : "",
                skipBy: (0 * batchSize),
                first: numInt,
                filter: attributesChosenList,
                orderBy: sortByObj.name,
                orderDirection: sortByObj.direction,
            }
        });
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
                <Box
                    sx={{
                        flexGrow: 2,
                        minWidth: '100px',
                        width: '40%',
                    }}>
                    <TextField
                        id="outlined-number"
                        label="Number of Items"
                        size="small"
                        type="number"
                        value={numberValue}
                        onChange={handleOnChangeNumberValue}
                        onKeyDown={handleOnKeyDown}
                        InputLabelProps={{
                            shrink: true,
                        }}
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

export default QuickTabPanel;