import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";

import { strWeiToETH, strETHToWei, DECIMALS } from 'utils/erc/erc20utils.js';
import { getURL } from "utils/erc/metadataUtils.js";
import { BigNumber } from 'ethers';

import TabPanel from "./TabPanel";

const ListingsTabPanel = ({ value, index, item, token }) => {

    const listing = token.lowestPrice[0];

    // console.log("listing", listing.pricePerItem, listing.pricePerItem);

    return (
        <TabPanel value={value} index={index}>
            <Box>
                <Typography variant="h6" component={"span"}>
                    {item.token.name}
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                }}>
                <Box
                    sx={{
                        // maxWidth: "100px",
                    }}>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        component={"span"}
                        wrap="wrap"
                        sx={{
                            // maxWidth: "100px",
                            // width: "100px",
                        }}
                    >
                        {`${strWeiToETH(listing.pricePerItem, DECIMALS)}`}
                    </Typography>
                </Box>
                <Typography
                    variant="body1"
                    color="secondary"
                    component={"span"}
                >
                    {`$MAGIC`}
                </Typography>
                {/* <Typography
                    variant="body1"
                    color="text.secondary"
                    component={"span"}
                >
                    ≈ 3.579 ETH
                </Typography> */}
            </Box>

            <Box>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    component={"span"}
                >
                    Quantity: 1
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    component={"span"}
                >
                    Seller: {listing.user.id}
                </Typography>
            </Box>

        </TabPanel>
    )
}


export default ListingsTabPanel;