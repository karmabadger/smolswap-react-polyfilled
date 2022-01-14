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


import PropertySection from './PropertySection/PropertySection';


function PropertiesDrawer({ drawerWidth, drawerMinWidth, open, setOpen }) {
    // const theme = useTheme();


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        console.log("handleDrawerClose", open);
        setOpen(false);
    };


    const sections = [
        'Property', 'Property', 'Property', 'Property', 'Property', 'Property',
    ];

    return (
        <Box>
            <Collapse sx={{ m: "0px" }} orientation="horizontal" in={open} collapsedSize={drawerMinWidth}>
                <Box sx={{ m: 0, height: "100%" }}
                    elevation={4}>
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
                                        {sections.map((section, index) => (
                                            <PropertySection key={index} section={section} />
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
                                            }} variant="contained">Clear All</Button>
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