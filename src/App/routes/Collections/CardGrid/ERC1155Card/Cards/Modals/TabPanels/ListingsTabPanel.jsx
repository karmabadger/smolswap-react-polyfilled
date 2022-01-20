import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { strWeiToETH, strETHToWei } from 'utils/erc/erc20utils.js';
import { getURL } from "utils/erc/metadataUtils.js";
import { BigNumber } from 'ethers';

import TabPanel from "./TabPanel";

const ListingsTabPanel = ({ value, index, item, token }) => {

    // const listing = token.lowestPrice[0];

    return (
        <TabPanel value={value} index={index}>
            <Box>
                <Typography variant="h6" component={"span"}>
                    {/* {item.token.name} */}
                </Typography>
            </Box>
            <Typography
                variant="body1"
                color="text.secondary"
                component={"span"}
            >
                4314 $MAGIC
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary"
                component={"span"}
            >
                ≈ 3.579 ETH
            </Typography>
        </TabPanel>
    )
}


export default ListingsTabPanel;