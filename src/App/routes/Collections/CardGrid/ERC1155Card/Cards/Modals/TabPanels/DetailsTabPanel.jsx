
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

const DetailsTabPanel = ({ value, index, item, token }) => {

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
                        primary="Owned by: 0x0000000000000000000000000000000000"
                    // secondary={"secondary" ? "Secondary text" : null}
                    />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Contract Address: 0x0000000000000000000000000000000000"
                    // secondary={"secondary" ? "Secondary text" : null}
                    />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Token Standard: ERC721"
                    // secondary={"secondary" ? "Secondary text" : null}
                    />
                </ListItem>
            </List>
        </TabPanel>
    )
}

export default DetailsTabPanel;