import { useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import ClickAwayListener from '@mui/base/ClickAwayListener';

import Box from "@mui/material/Box";

import { strWeiToETH } from 'utils/erc/erc20utils.js';
// import smol from "__mock_data__/img/smol.png";

import ERC721Modal from "./Modals/ERC721Modal";

import useCart from "hooks/useCart";

export default function ImgMediaCard({ item }) {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
        setOpen(true);
        setAnchorEl(document.body);
    }
    const handleClose = () => setOpen(false);

    const handleClickAway = () => {
        setOpen(false);
        console.log("handleClickAway");
    };


    // console.log("ImgMediaCard item: ", item);
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
        }
    }

    const handleRemoveFromCart = (event) => {
        if (added) {
            cart.cartContextObj.removeItem(OrderData);
            setAddedState(false);
        }
    }

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

    const id = open ? 'simple-popper' : 'not-open';
    return (
        <Card sx={{ maxWidth: 256, minHeight: 256 }}>
            <CardMedia
                component="img"
                alt={item.token.name}
                // height="360"
                // image={smol}
                image={imgLink}
                onClick={handleOpen}
            />

            {
                open && (

                    <ClickAwayListener onClickAway={handleClickAway}>
                        <Box sx={{ position: 'relative' }}>
                            <ERC721Modal open={open} handleClose={handleClose} anchorEl={anchorEl} id={id} item={item} />
                        </Box>
                    </ClickAwayListener>
                )
            }


            <CardContent
                style={{ paddingBottom: "21px" }}
                sx={{
                    px: "16px",
                    paddingBottom: "0px"
                }}
            >
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                        m: "0px"
                    }}
                >
                    {item.token.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {`${strWeiToETH(item.pricePerItem)} $MAGIC`}
                </Typography>

                <Box
                    sx={{
                        height: "37px"
                    }}
                ></Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "18px",
                        paddingBottom: "0px"
                    }}
                >
                    <Button
                        size="small"
                        sx={{
                            p: "0px",
                            height: "22px"
                        }}
                    >
                        Buy Now
                    </Button>
                    <Button
                        size="small"
                        sx={{
                            p: "0px",
                            height: "22px"
                        }}
                        onClick={handleOpen}
                    >
                        See details
                    </Button>

                    {
                        addedState ?
                            <IconButton
                                sx={{
                                    py: "0px",
                                    px: "0px",
                                    marginLeft: "10px"
                                }}
                                aria-label="add-to-cart"
                                onClick={handleRemoveFromCart}
                            >
                                <RemoveShoppingCartIcon size="large" fontSize="inherit" color="primary" />
                            </IconButton>
                            :
                            <IconButton
                                sx={{
                                    py: "0px",
                                    px: "0px",
                                    marginLeft: "10px"
                                }}
                                aria-label="add-to-cart"
                                onClick={handleAddToCart}
                            >
                                <AddShoppingCartIcon size="large" fontSize="inherit" color="primary" />
                            </IconButton>
                    }
                </Box>
            </CardContent>
        </Card>
    );
}
