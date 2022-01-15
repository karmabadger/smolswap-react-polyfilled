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

import smol from "../../../../../../__mock_data__/img/smol.png";

import ERC721Modal from "./Modals/ERC721Modal";

export default function ImgMediaCard({ added, handleAdd, handleRemove }) {
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

    const id = open ? 'simple-popper' : undefined;
    return (
        <Card sx={{ maxWidth: 128 }}>
            <CardMedia
                component="img"
                alt="smol"
                // height="360"
                image={smol}
                onClick={handleOpen}
            />

            {
                open && (

                    <ClickAwayListener onClickAway={handleClickAway}>
                        <Box sx={{ position: 'relative' }}>
                            <ERC721Modal open={open} handleClose={handleClose} anchorEl={anchorEl} id={id} />
                        </Box>
                    </ClickAwayListener>
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
                        Smol Brain #243243543543
                    </Typography>
                    <Typography variant="smbody" noWrap color="text.secondary">
                        4314 $MAGIC
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
                    <IconButton
                        sx={{
                            py: "0px",
                            px: "0px",
                            marginLeft: "8px"
                        }}
                        aria-label="add-to-cart"
                    >
                        {
                            added ? <RemoveShoppingCartIcon size="small" onClick={handleRemove} fontSize="inherit" color="primary" /> : <AddShoppingCartIcon size="large" onClick={handleAdd} fontSize="inherit" color="primary" />
                        }
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
}
