
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

const ActivityTabPanel = ({ value, index, item, token }) => {

    return (
        <TabPanel value={value} index={index}>
            <List dense>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="0x5C25...2E9d listed this item for 3,200 $MAGICF"
                        secondary="2 hours ago"
                    />
                </ListItem>
            </List>
        </TabPanel>
    );
}

export default ActivityTabPanel;