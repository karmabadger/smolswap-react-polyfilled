import { useState, useEffect } from 'react';

import { styled, useTheme, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Typography from "@mui/material/Typography";

import { makeStyles } from '@mui/styles';

import { Link } from "react-router-dom";

import useNetwork from "hooks/useNetwork";

import { useQuery, gql } from '@apollo/client';
import { testnetInfo, mainnetInfo } from "configs/network/network.js";
import { GET_COLLECTIONS, GET_COLLECTION } from "api/graphql/queries/queries.js";

import {
    collectionNameToPath,
    collectionPathToName
} from "utils/data/collectionData.js";

const useStyles = makeStyles({
    paper: {
        background: "black"
    }
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
}));

const NavbarDrawer = ({ open, handleDrawerClose, drawerWidth, matchesDownSM, matchesDownMD, collections }) => {
    const theme = useTheme();
    const classes = useStyles();

    const networkInfo = useNetwork();

    const baseRoute = networkInfo.baseRoute;

    // console.log(collections);


    return (<Drawer
        classes={{ paper: classes.paper }}
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box"
            }
        }}
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
    >
        <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                ) : (
                    <ChevronRightIcon />
                )}
            </IconButton>
        </DrawerHeader>
        <List>
            {collections.map((collection, index) => (
                <ListItem
                    button
                    sx={{ px: "24px" }}
                    key={index}>
                    <Link
                        to={`${baseRoute}collection/${collectionNameToPath(collection.name)}`}
                        style={{
                            textDecoration: "none",
                            color: theme.palette.text.primary
                        }}
                    >
                        <Typography variant="h6">
                            {collection.name}
                        </Typography>
                    </Link>
                </ListItem>
            ))}
        </List>
    </Drawer>)
}

export default NavbarDrawer