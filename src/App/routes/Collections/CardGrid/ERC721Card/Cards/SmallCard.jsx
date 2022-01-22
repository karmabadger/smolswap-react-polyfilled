import { useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import ClickAwayListener from '@mui/base/ClickAwayListener';

import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

import Box from "@mui/material/Box";

import useWindowDimensions from "../../../../../../hooks/useWindowDimensions.jsx";

import useAlertContext from "hooks/useAlertContext";

import ERC721Modal from "./Modals/ERC721Modal";

import { strWeiToETH } from 'utils/erc/erc20utils.js';


import useCart from "hooks/useCart";

export default function SmallCard({ item, collection }) {
    const [open, setOpen] = useState(false);

    const alertContext = useAlertContext();

    const handleOpen = (event) => {
        setOpen(true);
        // setAnchorEl(document.body);
    }
    const handleClose = () => setOpen(false);

    // const handleClickAway = () => {
    //     setOpen(false);
    //     console.log("handleClickAway");
    // };

    // console.log("alertContext: ", alertContext);

    const cart = useCart();

    // console.log("item: ", item);
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

    const added = cart.cartContextObj.checkIfItemInCart(OrderData);
    const [addedState, setAddedState] = useState(added);

    const handleAddToCart = (event) => {
        if (!added) {
            cart.cartContextObj.addItem(OrderData);
            setAddedState(true);

            alertContext.addTimedSnackbar(
                "standard",
                `${item.token.name} added to cart`,
                "success",
                3000,
                false
            )
        }
    }

    const handleRemoveFromCart = (event) => {
        if (added) {
            cart.cartContextObj.removeItem(OrderData);
            setAddedState(false);

            alertContext.addTimedSnackbar(
                "standard",
                `${item.token.name} removed from cart`,
                "success",
                3000,
                false
            )
        }
    }

    // console.log("collection: ", collection);


    const urlpath = item.token.metadata.image.split("/");
    let imgLink = "https://treasure-marketplace.mypinata.cloud/ipfs";

    for (let i = 0; i < urlpath.length; i++) {
        if (urlpath[i] === "ipfs" || urlpath[i] === "ipfs:" || urlpath[i] === "") {
            continue;
        } else if (urlpath[i] === "https:" || urlpath[i] === "http:") {
            imgLink = item.token.metadata.image;
            break;
        }
        else {
            imgLink += "/" + urlpath[i];
        }
    }

    // console.log("wut")
    const id = open ? 'simple-popper' : 'not-open';
    return (
        <Card sx={{ maxWidth: 128, minHeight: 128 }}>
            <CardMedia
                component="img"
                alt={item.token.name}
                // height="360"
                // image={smol}
                image={imgLink}
                onClick={handleOpen}
            />

            {
                collection && item &&
                (
                    <Box sx={{ position: 'relative' }}>
                        <ERC721Modal
                            open={open}
                            handleClose={handleClose}
                            id={id}
                            item={item}
                            collection={collection}

                            addedState={addedState}
                            handleAddToCart={handleAddToCart}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    </Box>
                )
            }

            <CardContent
                style={{ paddingBottom: "10px" }}
                sx={{
                    px: "0px",
                    paddingBottom: "0px"
                }}
            >
                <Box
                    sx={{
                        marginBottom: "6px",
                        px: "8px",
                    }}>
                    <Typography
                        gutterBottom
                        variant="smh1"
                        component="div"
                        sx={{
                            m: "0px"
                        }}
                        noWrap
                    >
                        {item.token.name}
                    </Typography>
                    <Typography variant="smbody" noWrap color="text.secondary">
                        {`${strWeiToETH(item.pricePerItem)} $MAGIC`}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "18px",
                        paddingBottom: "0px"
                    }}
                >
                    <Button
                        style={{
                            fontSize: "0.6rem",
                            padding: "0px",
                            width: "60px",
                        }}
                        size="small"
                        sx={{
                            p: "0px",
                            height: "22px",
                            width: "64px",
                        }}
                    >
                        Buy Now
                    </Button>
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
                                <RemoveShoppingCartIcon size="small" fontSize="inherit" color="primary" />
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
    );
}
