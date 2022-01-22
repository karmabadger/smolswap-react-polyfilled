
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
// import { DateTime } from "luxon";
// import fromNow from "from-now";

import ListItemIcon from "@mui/material/ListItemIcon";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import TabPanel from "../TabPanel";

import IosShareIcon from '@mui/icons-material/IosShare';
import IconButton from '@mui/material/IconButton';
import { strWeiToETH } from "utils/erc/erc20utils";


const CartTabPanel = ({ value, index, item, token }) => {

    // const listings = token.listings

    return (
        <Box
        sx={{
            width: "100%",
        }}>
            <TabPanel value={value} index={index}
                sx={{
                    width: "100%",
                }}
            >
                <List dense>
                </List>
            </TabPanel>
        </Box>
    );
}

export default CartTabPanel;