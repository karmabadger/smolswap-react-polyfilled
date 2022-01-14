
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



const TopBox = ({ }) => {
    // const theme = useTheme();

    return (
        <Box id="collection-top-box" sx={{ my: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "48px" }} >

            <Box id="collection-name-info-box" sx={{ height: "56px", marginTop: "48px" }}>
                <Typography variant="h3" align='center'>Smol Brains</Typography>
            </Box>

            <Box id="collection-info-box" sx={{ height: "64px", display: 'flex', flexDirection: "row", marginBottom: "32px", gap: "30px" }}>
                <Box id="collection-floor-price-box" sx={{ margin: "0px", flexGrow: "1", display: 'flex', flexDirection: "column", gap: "8px" }}>
                    <Typography variant="h6" color="secondary.dark">
                        Floor price
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        3 200 200 $MAGIC
                    </Typography>
                </Box>
                <Box id="collection-listings-box" sx={{ margin: "0px", flexGrow: "1", display: 'flex', flexDirection: "column", gap: "8px" }}>
                    <Typography variant="h6" color="secondary.dark">
                        Listings
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        1040000 Listed
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default TopBox;