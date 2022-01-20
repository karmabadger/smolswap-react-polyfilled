import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import ListItemIcon from "@mui/material/ListItemIcon";

import IosShareIcon from '@mui/icons-material/IosShare';

import IconButton from '@mui/material/IconButton';

import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import TabPanel from "./TabPanel";

import { testnetInfo, mainnetInfo } from 'configs/network/network.js';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { GET_COLLECTIONS, GET_COLLECTION_STATS, GET_COLLECTION_INFO, GET_COLLECTION_LISTINGS, GET_COLLECTION_LISTINGS_ERC1155, GET_TOKEN_DETAILS } from "api/graphql/queries/queries.js";


const AttributesTabPanel = ({ value, index, item, token }) => {


    return (
        <TabPanel value={value} index={index}>
            <Typography variant="h6" component={"span"}>
                Attributes:
            </Typography>

            <List dense>
                {
                    token.metadata.attributes.map((value, index) => {

                        const valuePercentage = (value.attribute.percentage) ? `${(parseFloat(value.attribute.percentage) * 100).toFixed(2)}%` : "";

                        return (
                            <ListItem key={index}
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
                                    primary={`${value.attribute.name}: ${value.attribute.value}`}
                                    secondary={valuePercentage}
                                />
                            </ListItem>
                        )
                    })
                }
            </List>
        </TabPanel>

    )
}

export default AttributesTabPanel;