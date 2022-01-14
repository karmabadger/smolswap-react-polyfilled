
import { useState } from 'react';

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
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Collapse from '@mui/material/Collapse';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Button from '@mui/material/Button';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

const Checkout = (props) => {
    return (
        <Box className="checkout" id="checkout-page"
            sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
            <Box id="checkout-top"
                sx={{
                    my: "48px", display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "48px"
                }}>
                <Typography variant='h3'>
                    Checkout
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex', flexDirection: 'row', alignItems: 'center', gap: "0px"
                }}>

                <Box id="checkout-settings"
                    sx={{
                        my: 0, width: "500px", flexShrink: "1", flexGrow: "1", minWidth: "300px", display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "48px"
                    }}>


                    <Box
                        sx={{
                            my: 0, width: "100%", display: 'flex', flexDirection: 'row',
                        }}>
                        <Box>

                            <Typography
                                sx={{
                                    alignSelf: 'flex-start',
                                }} variant='h4'>
                                Settings
                            </Typography>
                        </Box>

                    </Box>
                    <Box sx={{
                        my: 0, width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "24px"
                    }}>
                        <Box sx={{
                            backgroundColor: "background.paperDark",
                            width: "100%"
                        }}>
                            <Accordion disableGutters elevation={0}
                                sx={{
                                    width: "100%",
                                    backgroundColor: "background.paperDark",
                                }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ flexShrink: 0 }} variant="h5">
                                        Mode:
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    fdsfdsfdsfds
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                        <Box sx={{
                            backgroundColor: "background.paperDark",
                            width: "100%",
                        }}>
                            <Accordion disableGutters elevation={0}
                                sx={{
                                    width: "100%",
                                    backgroundColor: "background.paperDark",
                                }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ flexShrink: 0 }} variant="h5">
                                        In Case of Failure:
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    fdsfdsfdsfds
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                        <Box sx={{
                            backgroundColor: "background.paperDark",
                            width: "100%",
                        }}>
                            <Accordion disableGutters elevation={0}
                                sx={{
                                    width: "100%",
                                    backgroundColor: "background.paperDark",
                                }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ flexShrink: 0 }} variant="h5">
                                        ERC1155 Specific Settings:
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    fdsfdsfdsfds
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            width: "100%",
                        }}>
                        <Box
                            sx={{
                                my: 0, display: 'flex', flexDirection: 'row',
                            }}>
                            <Box>

                                <Typography
                                    sx={{
                                        alignSelf: 'flex-start',
                                    }} variant='h4'>
                                    Review and Checkout
                                </Typography>
                            </Box>

                        </Box>
                        <Box>

                        </Box>

                        <Box sx={{
                            my: 0, display: 'flex', flexDirection: 'row',
                        }}>
                            <Button
                                sx={{
                                    width: "100%",
                                }}
                                variant="contained">Contained</Button>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box >
    )
}

export default Checkout