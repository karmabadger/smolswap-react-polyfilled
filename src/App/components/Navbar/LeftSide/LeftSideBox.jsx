import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import logo from './Logo/logo.svg';

import SearchBar from './SearchBar/SearchBar';

const LeftSideBox = ({ handleDrawerOpen, open }) => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'row',
                // bgcolor: 'background.paper',
                borderRadius: 1,
            }}
        >
            <img src={logo} alt="logo" />
            <SearchBar />
        </Box>
    )
}

export default LeftSideBox;