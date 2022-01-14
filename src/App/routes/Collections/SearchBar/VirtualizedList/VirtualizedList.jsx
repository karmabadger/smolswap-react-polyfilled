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

const getItemSize = (index) => {
    return 46;
};
function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={`Item ${index + 1}`} />
            </ListItemButton>
        </ListItem>
    );
}

function VirtualizedList() {
    return (
        <Box
            style={{ margin: '0px' }}
            sx={{
                margin: '0px',
                width: '100%',
                height: 400,
                bgcolor: 'background.paper',
            }}
        >
            <VariableSizeList
                height={400}
                width="100%"
                itemSize={getItemSize}
                itemCount={0}
            // overscanCount={5}
            >
                {renderRow}
            </VariableSizeList>
        </Box>
    );
}

export default VirtualizedList;