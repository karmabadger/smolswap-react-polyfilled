import { useState, useEffect } from "react";


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
import { GET_COLLECTIONS, GET_COLLECTION_STATS, GET_COLLECTION_INFO, GET_COLLECTION_LISTINGS, GET_COLLECTION_LISTINGS_WITH_MAX_PRICE, GET_COLLECTION_LISTINGS_ERC1155, GET_COLLECTION_LISTINGS_COUNT_WITH_MAX_PRICE } from "api/graphql/queries/queries.js";

import useCart from 'hooks/useCart.jsx';

import { strETHToWei } from "utils/erc/erc20utils";
import { BigNumber } from "ethers";

import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import TabPanel from "./TabPanel";

const SweepTabPanel = ({
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

    const [loadListings, { loading, error, data, called }] = useLazyQuery(GET_COLLECTION_LISTINGS_WITH_MAX_PRICE);

    const [loadListingsCount, { loading: loadingCount, error: errorCount, data: dataCount, called: calledCount }] = useLazyQuery(GET_COLLECTION_LISTINGS_COUNT_WITH_MAX_PRICE);

    const cart = useCart();


    const [maxPrice, setMaxPrice] = useState(0);
    const handleOnChangeMaxPrice = (event) => {
        if (event.target.value > 0) {
            setMaxPrice(event.target.value);

            let maxPriceWei = strETHToWei(event.target.value);
            let maxItemsBN = 0;

            try {
                maxItemsBN = BigNumber.from(maxItems);
            } catch (error) {
            }

            if (maxPriceWei != 0 && maxItemsBN.gt(0) && maxItemsBN.lte(1000)) {
                console.log("fetching listings",);
                loadListingsCount({
                    variables: {
                        id: collection.address,
                        isERC1155: (ercType === "ERC1155"),
                        tokenName: (searchList.length > 0) ? searchList[0] : "",
                        skipBy: 0,
                        first: maxItemsBN.toNumber(),
                        filter: attributesChosenList,
                        orderBy: "pricePerItem",
                        orderDirection: "asc",
                        maxPrice: (maxPriceWei),
                    }
                });
            }
        }
    };

    const [maxItems, setMaxItems] = useState(0);
    const handleOnChangeMaxItems = (event) => {
        if (event.target.value > 0) {
            setMaxItems(event.target.value);

            let maxItemsBN = 0;

            try {
                maxItemsBN = BigNumber.from(event.target.value);
            } catch (error) {
            }

            if (maxPrice != 0 && maxItemsBN.gt(0) && maxItemsBN.lte(1000)) {
                console.log("fetching listings",);
                loadListingsCount({
                    variables: {
                        id: collection.address,
                        isERC1155: (ercType === "ERC1155"),
                        tokenName: (searchList.length > 0) ? searchList[0] : "",
                        skipBy: 0,
                        first: maxItemsBN.toNumber(),
                        filter: attributesChosenList,
                        orderBy: "pricePerItem",
                        orderDirection: "asc",
                        maxPrice: (strETHToWei(maxPrice)),
                    }
                });
            }
        }
    };

    const [resultsCount, setResultsCount] = useState(0);


    useEffect(() => {
        // console.log("SweepTabPanel.jsx: useEffect called", dataCount, calledCount, loadingCount, errorCount);
        // console.log("calledCount2", calledCount, !loadingCount && !errorCount && dataCount && dataCount.collection.listings);
        if (calledCount) {
            // console.log("calleCount3", calledCount);
            if (!loadingCount) {
                // console.log("calleCount4", calledCount);
                if (!errorCount) {
                    // console.log("calleCount5", calledCount);
                    if (dataCount) {
                        // console.log("calleCount6", calledCount, dataCount);
                        if (dataCount.collection.listings.length > 0) {
                            // console.log("calleCount7", calledCount);
                            // console.log("count: ", dataCount.collection.listings);
                            setResultsCount(dataCount.collection.listings.length);
                            return;
                        }
                    }
                }
            }
        }
        setResultsCount(0);
    }, [loadingCount, errorCount, dataCount, calledCount]);

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
            // console.log("data", data);

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
        } else {


        }
    }

    function fetchListings(event) {
        // console.log("fetchListings", numberValue);
        let maxPriceBN = 0;

        try {
            maxPriceBN = parseFloat(maxPrice);
        } catch (error) {
            console.log("error", error);
            alert("Invalid max price: Not a Big Number");
        }

        let maxItemsBN = 0;

        try {
            maxItemsBN = BigNumber.from(maxItems);
        } catch (error) {
            console.log("error", error);
            alert("Invalid max items: Not a Big Number");
        }

        if (maxPriceBN <= 0) {
            alert("Invalid max price: Must be greater than 0");

        } else if (maxItemsBN.gt(0)) {
            alert("Invalid max items: Must be greater than 0");

        } else if (maxItemsBN.lte(1000)) {
            alert("Invalid max items: Must be less than 1000");
        } else {

            console.log("strETHToWei", strETHToWei(maxPrice));
            loadListings({
                variables: {
                    id: collection.address,
                    isERC1155: (ercType === "ERC1155"),
                    tokenName: (searchList.length > 0) ? searchList[0] : "",
                    skipBy: 0,
                    first: maxItemsBN.toNumber(),
                    filter: attributesChosenList,
                    orderBy: "pricePerItem",
                    orderDirection: "asc",
                    maxPrice: (strETHToWei(maxPrice)),
                }
            });
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
                        label="Max Price in $MAGIC"
                        size="small"
                        type="number"
                        value={maxPrice}
                        onChange={handleOnChangeMaxPrice}
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
                        label="Max Number of Items"
                        size="small"
                        type="number"
                        value={maxItems}
                        onChange={handleOnChangeMaxItems}
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
            <Box>
                <Typography
                    variant="body2"
                    color="textSecondary"
                >
                    {`${resultsCount} results found`}
                </Typography>
            </Box>
        </TabPanel>
    )
}

export default SweepTabPanel;