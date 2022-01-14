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

// import { Link } from "react-router-dom";
import Link from '@mui/material/Link';

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
}));

const NavbarDrawer = ({ open, handleDrawerClose, drawerWidth }) => {
    const theme = useTheme();

    return (<Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box"
            }
        }}
        variant="persistent"
        anchor="left"
        open={open}
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
            {["Extra Life", "Keys", "Legions", "Legions Genesis"].map((text, index) => (
                <ListItem
                    button
                    sx={{ px: "24px" }}
                    key={text}>
                    <Link href="/#" underline="none" color="text.primary">
                        <Typography variant="h6">
                            {text}
                        </Typography>
                    </Link>
                </ListItem>
            ))}
        </List>
    </Drawer>)
}

export default NavbarDrawer