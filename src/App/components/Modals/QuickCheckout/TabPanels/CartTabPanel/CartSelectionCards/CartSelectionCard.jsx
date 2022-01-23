



import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import TextField from '@mui/material/TextField';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import Checkbox from '@mui/material/Checkbox';


import { strWeiToETH, strETHToWei } from "utils/erc/erc20utils";
// import smol from "./smol.png";

import { getURL } from "utils/erc/metadataUtils.js";


import useCart from "hooks/useCart";

function CartSelectionCard({ handleToggle, value, item, index, selectedList, setSelectedList }) {
    const theme = useTheme();

    const cart = useCart();
    const handleRemoveFromCart = () => {
        console.log("remove from cart", item);
        // remove from cart
        cart.cartContextObj.removeItem(item);

        const newSelectedList = [];
        for (let i = 0; i < selectedList.length; i++) {
            if (i !== index) {
                newSelectedList.push(selectedList[i]);
            }
        }
        setSelectedList(newSelectedList);
    }

    const handleMaxPricePerItemChange = (event) => {
        console.log("max price per item change", typeof event.target.value, strETHToWei(event.target.value));

        item.maxPricePerItem = strETHToWei(event.target.value);
    }

    return (
        <Card sx={{
            display: "flex",
            width: "100%"
        }}>
            <Box>
                <CardMedia
                    component="img"
                    sx={{
                        // height: "100%",
                        height: "84px"
                    }}
                    image={getURL(item.metadata.image)}
                    alt="img of NFT"
                />
            </Box>
            <Box sx={{
                flexGrow: "1",
                height: "84px"
            }}>
                <CardContent style={{
                    paddingBottom: "0px"
                }}
                    sx={{
                        py: 0,
                        height: "100%",
                        // display: "flex", flexDirection: "column", justifyContent: "center"
                    }} >
                    <Box
                        sx={{
                            flexGrow: "1",
                            height: "100%",
                            display: "flex",
                            flexDirection: "row",
                            gap: "12px",
                        }}>

                        <Box sx={{
                            width: "256px",
                            minWidth: "256px",
                            flexGrow: "0",
                            flexShrink: "0",
                            marginLeft: "4px",
                            marginRight: "4px",
                            height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"
                        }}>
                            <Typography
                                style={{
                                    fontSize: "0.9rem",
                                }}
                                // component="div"
                                variant="h6"
                                noWrap
                            >
                                {item.name}
                            </Typography>
                            <Typography
                                style={{
                                    fontSize: "0.75rem"
                                }}
                                // variant="subtitle1"
                                color="text.secondary"
                                // component="div"
                                noWrap
                            >
                                {`${strWeiToETH(item.pricePerItem)} $MAGIC`}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                flexGrow: "6",
                                minWidth: "100px",
                                height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"
                            }}
                        >
                            <TextField
                                label="Max Price Per Item"
                                size="small"
                                id="standard-size-normal"
                                defaultValue={strWeiToETH(item.maxPricePerItem)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{
                                    width: "100%",
                                }}
                                onChange={handleMaxPricePerItemChange}
                            />

                        </Box>

                        <Box
                            sx={{
                                width: "100px",
                                minWidth: "90px",
                                flexGrow: "1",
                                height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"
                            }}
                        >
                            {
                                item.standard === "ERC721" ?
                                    (
                                        <TextField
                                            label="Quantity"
                                            size="small"
                                            id="standard-size-normal"
                                            defaultValue="1"
                                            disabled
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            sx={{
                                                width: "100%",
                                            }}
                                        />
                                    ) :
                                    (
                                        <TextField
                                            label="Quantity"
                                            size="small"
                                            id="standard-size-normal"
                                            defaultValue="1"
                                            // disabled
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            sx={{
                                                width: "100%",
                                            }}
                                        />
                                    )
                            }

                        </Box>

                        <Box
                            sx={{
                                height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"
                            }}>
                            <IconButton color="primary" aria-label="add to shopping cart"
                                onClick={handleRemoveFromCart}
                            >
                                <RemoveShoppingCartIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
}

export default CartSelectionCard;