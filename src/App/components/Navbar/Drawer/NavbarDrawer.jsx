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

import Link from '@mui/material/Link';

import useNetwork from "hooks/useNetwork";

import { useQuery, gql } from '@apollo/client';

import { testnetInfo, mainnetInfo } from "configs/network/network.js";


import { getCollections } from "api/graphql/queries/queries.js";



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

const NavbarDrawer = ({ open, handleDrawerClose, drawerWidth, matchesDownSM, matchesDownMD, }) => {
    const theme = useTheme();
    const classes = useStyles();

    const [network, setNetwork] = useNetwork();

    // const [collections, setCollections] = useState([]);
    let collections = [];
    const res = useQuery(getCollections())
    // if (res.data) {
    //     setCollections(res.data.collections);
    // }


    // useEffect(() => {
    //     const res = useQuery(getCollections())
    //     if (res.data) {
    //         setCollections(res.data.collections)
    //     }
    // }, [collections])
    const baseRoute = network.type === "testnet" ? testnetInfo.baseRoute : mainnetInfo.baseRoute;

    if (res.data) {
        collections = res.data.collections;
        // console.log("baseRoute", baseRoute, `${baseRoute}collection/${((collections[0].name).toLowerCase()).replace(" ", "-")}`);
    }
    // console.log("res", res);


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
                    <Link href={`${baseRoute}collection/${((collection.name).toLowerCase()).replace(" ", "-")}`} underline="none" color="text.primary">
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