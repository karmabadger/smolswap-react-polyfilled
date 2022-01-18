import { useState, useEffect, useRef } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { styled, useTheme, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VirtualizedList from "./VirtualizedList/VirtualizedList";


const Search = styled("div")(({ theme }) => ({
    // maxWidth: "800px",
    flexGrow: 1,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto"
    }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    }
}));

const StyledPopper = styled(Popper)(({ theme }) => ({
    zIndex: theme.zIndex.modal
}));

function SearchBar() {


    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const theme = useTheme();
    const ref = useRef(null);

    const handleClick = (event) => {
        setOpen(true);
        setAnchorEl(event.currentTarget);
        // console.log("width", ref.current.offsetWidth);
    };

    const handleOnClickAway = (e) => {
        // console.log('closing..');
        setOpen(false);
    };


    // useEffect(() => {
    //     console.log("width", ref.current.offsetWidth);
    // }, [ref]);


    const id = open ? 'simple-popper' : undefined;

    return (
        <Search ref={ref}>
            <ClickAwayListener onClickAway={handleOnClickAway}>
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search Collection…"
                        inputProps={{ "aria-label": "search" }}
                        onClick={handleClick}
                    />
                    <StyledPopper
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        placement="bottom-start"
                        elevation={24}
                        // placement="bottom-start"
                        disablePortal={false}
                        modifiers={[
                            {
                                name: 'flip',
                                enabled: true,
                                options: {
                                    altBoundary: true,
                                    rootBoundary: 'document',
                                    padding: 8,
                                },
                            },
                            {
                                name: 'preventOverflow',
                                enabled: true,
                                options: {
                                    altAxis: true,
                                    altBoundary: true,
                                    tether: true,
                                    rootBoundary: 'viewport',
                                    padding: 8,
                                },
                            },
                        ]}


                    >
                        <VirtualizedList widthValue={ref.current ? (ref.current.offsetWidth) : (0)} />
                    </StyledPopper>
                </Box>
            </ClickAwayListener>
        </Search>
    )
}

export default SearchBar;