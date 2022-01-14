import { useState } from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { styled, useTheme, alpha } from "@mui/material/styles";

import { VariableSizeList } from 'react-window';

const getItemSize = (index) => {
    return 46;
};
function renderRow(props) {
    const { index, style } = props;

    // const theme = useTheme();

    return (
        <ListItem
            style={style}
            sx={{
                width: '478px',
            }}
            key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText
                    sx={{
                        px: '32px',
                    }}
                    primary={`Item ${index + 1}`} />
            </ListItemButton>
        </ListItem>
    );
}

const StyledBox = styled(Box)(({ theme }) => ({
    zIndex: theme.zIndex.modal
}));

function VirtualizedList({ widthValue }) {
    console.log('widthValue: ', widthValue);
    const theme = useTheme();
    return (
        <StyledBox
            style={{ margin: '0px' }}
            sx={{
                margin: '0px',
                bgcolor: 'background.paper',
                zIndex: theme.zIndex.modal
            }}
        >
            <VariableSizeList
                height={400}
                width={widthValue}
                itemSize={getItemSize}
                itemCount={200}

            // overscanCount={5}
            >
                {renderRow}
            </VariableSizeList>
        </StyledBox>
    );
}

export default VirtualizedList;