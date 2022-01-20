
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import ListItemIcon from "@mui/material/ListItemIcon";

import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import TabPanel from "./TabPanel";

const RarityTabPanel = ({ value, index, item, token }) => {

    return (
        <TabPanel value={value} index={index} >
            <Typography
                variant="body1"
                color="text.secondary"
                component={"span"}
            >
                Coming soon!
            </Typography>
        </TabPanel >
    )
}

export default RarityTabPanel;