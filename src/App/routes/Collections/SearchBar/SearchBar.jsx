import { useState } from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { VariableSizeList } from 'react-window';

import VirtualizedList from './VirtualizedList/VirtualizedList';


const SearchBar = ({ searchList, setSearchList }) => {
    const options = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
    ];

    const [open, setOpen] = useState(false);

    const handleOnClick = () => {
        setOpen(true);
    };
    const handleClickAway = () => {
        // console.log('closing..');
        setOpen(false);
    };

    const handleOnKeyPressed = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setSearchList(searchList.concat(e.target.value));
            console.log('enter', e.target.value);
        }
    };


    return (
        <Box
            sx={{
                m: "0px",
                width: '100%',
            }}
        >
            <ClickAwayListener
                onClickAway={handleClickAway}
            >
                <Box
                    component="form"
                    sx={{
                        width: '100%',
                    }}
                    noValidate
                // autoComplete="off"
                >
                    <TextField
                        sx={{ margin: '0px', width: '100%' }}
                        id="search-item"
                        label="Search Item"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        onClick={handleOnClick}
                        placeholder="Enter an ID or search term..."
                        onKeyPress={handleOnKeyPressed}
                    />
                    {/* {open ? <VirtualizedList /> : null} */}
                </Box>
            </ClickAwayListener>
        </Box>
    )
}


export default SearchBar;