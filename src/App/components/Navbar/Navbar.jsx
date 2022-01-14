import { useState } from 'react'

import { styled, useTheme, alpha } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

import MuiAppBar from "@mui/material/AppBar";

import RightSideBox from './RightSide/RightSideBox';
import LeftSideBox from './LeftSide/LeftSideBox';
import NavbarDrawer from './Drawer/NavbarDrawer';

const drawerWidth = 350;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));




export default function Topbar() {
    const theme = useTheme();
    const matchesDownMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    // console.log("matches down MD", matchesDownMD, "matches down SM", matchesDownSM);

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <AppBar position="fixed" >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: "none" }) }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <LeftSideBox handleDrawerOpen={handleDrawerOpen} open={open} matchesDownMD={matchesDownMD} matchesDownSM={matchesDownSM} />
                    <RightSideBox matchesDownMD={matchesDownMD} matchesDownSM={matchesDownSM} />
                </Toolbar>

            </AppBar >

            <NavbarDrawer handleDrawerClose={handleDrawerClose} open={open} drawerWidth={drawerWidth} matchesDownMD={matchesDownMD} matchesDownSM={matchesDownSM} />
        </div>
    );

}
