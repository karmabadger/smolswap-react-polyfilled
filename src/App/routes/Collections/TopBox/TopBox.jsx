
import { useTheme } from '@mui/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';


import { BigNumber } from 'ethers';
import { DECIMALS, strETHToWei, strWeiToETH } from 'utils/erc/erc20utils.js';

import { testnetInfo, mainnetInfo } from 'configs/network/network.js';
import { useQuery, gql } from '@apollo/client';
import { GET_COLLECTIONS, GET_COLLECTION_STATS, GET_COLLECTION_LISTINGS } from "api/graphql/queries/queries.js";
import useFindCollection from "hooks/useFindCollection";


const TopBox = ({ collection }) => {
    const { data, loading, fetchMore, error } = useQuery(GET_COLLECTION_STATS, {
        variables: {
            id: collection.address
        }
    })

    if (loading) return <div>Loading...</div>

    const collectionStats = data.collection;

    return (
        <Box id="collection-top-box" sx={{
            my: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "48px",
        }} >

            <Box id="collection-name-info-box" sx={{ height: "56px", marginTop: "48px" }}>
                <Typography variant="h3" align='center'>{collection.name}</Typography>
            </Box>

            <Box id="collection-info-box" sx={{ height: "64px", display: 'flex', flexDirection: "row", marginBottom: "32px", gap: "30px" }}>
                <Box id="collection-floor-price-box" sx={{ margin: "0px", flexGrow: "1", display: 'flex', flexDirection: "column", gap: "8px" }}>
                    <Typography variant="h6" color="secondary.dark">
                        Floor price
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {`${strWeiToETH(collectionStats.floorPrice)} $MAGIC`}
                    </Typography>
                </Box>
                <Box id="collection-listings-box" sx={{ margin: "0px", flexGrow: "1", display: 'flex', flexDirection: "column", gap: "8px" }}>
                    <Typography variant="h6" color="secondary.dark">
                        Listings
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {`${collectionStats.totalListings} Listed`}
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default TopBox;