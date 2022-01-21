
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

import IosShareIcon from '@mui/icons-material/IosShare';

import IconButton from '@mui/material/IconButton';

const DetailsTabPanel = ({ value, index, item, token, collection }) => {

    console.log("collection", collection);
    return (
        <TabPanel value={value} index={index}>
            <List dense>
                <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete"
                            color="primary"
                        >
                            <IosShareIcon />
                        </IconButton>
                    }>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Owned by:"
                        secondary={token.owner.id}
                    />
                </ListItem>

                <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete"
                            color="primary"
                        >
                            <IosShareIcon />
                        </IconButton>
                    }>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Contract Address:"
                        secondary={collection.address}
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