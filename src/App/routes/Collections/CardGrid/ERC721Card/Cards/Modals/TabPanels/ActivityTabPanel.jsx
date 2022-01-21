
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { DateTime } from "luxon";
import fromNow from "from-now";

import ListItemIcon from "@mui/material/ListItemIcon";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import TabPanel from "./TabPanel";

import IosShareIcon from '@mui/icons-material/IosShare';
import IconButton from '@mui/material/IconButton';
import { strWeiToETH } from "utils/erc/erc20utils";


const ActivityTabPanel = ({ value, index, item, token }) => {

    const listings = token.listings

    return (
        <TabPanel value={value} index={index}>
            <List dense>
                {
                    listings.map((listing, index) => {

                        const buyer = listing.buyer;
                        const seller = listing.user;
                        const time = fromNow(DateTime.fromSeconds(Number(listing.blockTimestamp)));

                        console.log("buyer", buyer, "seller", seller, "time", time);
                        if (buyer !== null) {
                            let buyerStr = `${buyer.id.substr(0, 6)}...${buyer.id.substr(buyer.id.length - 4)}`;
                            return (
                                <ListItem
                                    key={index}
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
                                        primary={`${buyerStr} listed this item for ${strWeiToETH(listing.pricePerItem)} $MAGIC`}
                                        secondary={`${time} ago`}
                                    />
                                </ListItem>
                            )
                        }

                        let sellerStr = `${seller.id.substr(0, 6)}...${seller.id.substr(seller.id.length - 4)}`;
                        return (
                            <ListItem
                                key={index}
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
                                    primary={`${sellerStr} listed this item for ${strWeiToETH(listing.pricePerItem)} $MAGIC`}
                                    secondary={`${time} ago`}
                                />
                            </ListItem>
                        )
                    })
                }
            </List>
        </TabPanel>
    );
}

export default ActivityTabPanel;