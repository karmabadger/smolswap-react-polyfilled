import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Collapse from '@mui/material/Collapse';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';

import { testnetInfo, mainnetInfo } from 'configs/network/network.js';
import { useQuery, gql } from '@apollo/client';
import { GET_COLLECTIONS, GET_COLLECTION_STATS, GET_COLLECTION_INFO, GET_COLLECTION_LISTINGS } from "api/graphql/queries/queries.js";
import useFindCollection from "hooks/useFindCollection";

import PropertySection from './PropertySection/PropertySection';


function PropertiesDrawer({ drawerWidth, drawerMinWidth, open, setOpen, attributesList, setAttributesList, attributesChecked, setAttributesChecked }) {
    // const theme = useTheme();

    // console.log("attributesd", attributesList, attributesChecked);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        console.log("handleDrawerClose", open);
        setOpen(false);
    };

    const clearAll = () => {
        const allFalse = []

        for (let i = 0; i < attributesList.length; i++) {
            allFalse.push([]);
            for (let j = 0; j < attributesList[i].list.length; j++) {
                allFalse[i].push(false);
            }
        }
        setAttributesChecked(allFalse);
    }


    // const attributesList = ["hello", "hello", "hello"]
    // for (const [key, value] of Object.entries(attributes)) {
    //     attributesList.push(value);
    // }

    return (
        <Box
            sx={{
            }}>
            <Collapse sx={{
                m: "0px",
            }}
                orientation="horizontal" in={open} collapsedSize={drawerMinWidth}>
                <Box sx={{
                    m: 0, height: "100%",
                }}
                >
                    <Box
                        sx={{ width: drawerWidth, height: '100%' }}>
                        {open ? (
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        ) : (
                            <IconButton onClick={handleDrawerOpen}>
                                <ChevronRightIcon />
                            </IconButton>
                        )}

                        {
                            open ? (
                                <Box>
                                    <Box
                                        sx={{
                                            // marginBottom: "16px",
                                        }}>
                                        {attributesList.map((attribute, index) => (
                                            <PropertySection key={index} attribute={attribute} attributeIndex={index} attributesList={attributesList} setAttributesList={setAttributesList} attributesChecked={attributesChecked}
                                                setAttributesChecked={setAttributesChecked} />
                                        ))}
                                    </Box>
                                    <Divider />

                                    <Box
                                        sx={{
                                            marginTop: "24px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "100%",
                                        }}>
                                        <Button size="large"
                                            sx={{
                                                width: "90%",
                                            }}
                                            variant="contained"
                                            onClick={clearAll}>
                                            Clear All</Button>
                                    </Box>
                                </Box>
                            ) : (
                                null)
                        }

                    </Box>
                </Box>
            </Collapse>
        </Box>

    );
}


export default PropertiesDrawer;