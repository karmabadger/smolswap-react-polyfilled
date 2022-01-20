import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import { styled, useTheme, alpha } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";

import logo from './Logo/logo.svg';

import SearchBar from './SearchBar/SearchBar';

import SvgIcon from '@mui/material/SvgIcon';
import Icon from '@mui/material/Icon';

import { Link } from 'react-router-dom';

const LeftSideBox = ({ matchesDownSM, matchesDownMD, }) => {

    const theme = useTheme();
    const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate("/");
    // }


    if (matchesDownSM) {
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
                <SearchBar />
            </Box>
        )
    } else if (matchesDownMD) {
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
                <SearchBar />
            </Box>
        )
    }

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: "stretch",
                // borderRadius: 1,
            }}
        >
            <Box
                sx={{
                    height: '200%',
                    display: 'flex',
                    flexDirection: 'column',
                    py: "0.5rem",
                    px: "0.5rem",
                }}>

                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: theme.palette.text.primary,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >

                    <Icon sx={{
                        width: 'auto',

                        // height: '80%',
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <Box
                            sx={{
                                height: '100%',
                                minWidth: '0px',
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                borderRadius: 1,
                            }}
                        >

                            <img src={logo} alt="logo" />
                        </Box>
                    </Icon>
                </Link>
            </Box>
            <SearchBar />
        </Box>
    )
}

export default LeftSideBox;