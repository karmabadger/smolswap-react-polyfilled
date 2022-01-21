import { useState } from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { Link } from "react-router-dom";

import { styled, useTheme, alpha } from "@mui/material/styles";

import { VariableSizeList } from 'react-window';

import {
    collectionNameToPath,
    collectionPathToName
} from "utils/data/collectionData.js";

import useNetwork from 'hooks/useNetwork';

const getItemSize = (index) => {
    return 46;
};

const StyledBox = styled(Box)(({ theme }) => ({
    zIndex: theme.zIndex.modal
}));

function VirtualizedList({ widthValue, results }) {
    const theme = useTheme()

    const networkInfo = useNetwork();
    const baseRoute = networkInfo.baseRoute;


    const getItem = (index) => {
        return results[index];
    };

    function renderRow({ index, style }) {
        const item = getItem(index);
        return (
            <ListItem
                style={style}
                sx={{
                    width: '478px',
                }}
                key={index} component="div" disablePadding>
                <ListItemButton>

                    <Link
                        to={`${baseRoute}collection/${collectionNameToPath(item.name)}`}
                        style={{
                            textDecoration: "none",
                            color: theme.palette.text.primary
                        }}
                    >
                        <ListItemText
                            sx={{
                                px: '32px',
                            }}
                            primary={item.name} />
                        {/* <Typography variant="h6">
                            {collection.name}
                        </Typography> */}
                    </Link>
                </ListItemButton>
            </ListItem>
        );
    }

    const heightCalc = (results.length * 46) + (results.length * 2) + 2;
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
                height={heightCalc}
                width={widthValue}
                itemSize={getItemSize}
                itemCount={results.length}
            >
                {renderRow}
            </VariableSizeList>
        </StyledBox>
    );
}

export default VirtualizedList;