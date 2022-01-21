
import { useState, useEffect } from 'react';

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
import TextField from '@mui/material/TextField';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import CartSelectionCardsList from './CartSelectionCardsList/CartSelectionCardsList';

import useNetwork from '../../../hooks/useNetwork';
import { testnetInfo, mainnetInfo } from '../../../configs/network/network.js';


import useCart from 'hooks/useCart';

function checkIfAllTrue(checkList) {
    for (let i = 0; i < checkList.length; i++) {
        if (!checkList[i]) {
            return false;
        }
    }
    return true;
}

function getNumberOfTrue(checkList) {
    let count = 0;
    for (let i = 0; i < checkList.length; i++) {
        if (checkList[i]) {
            count++;
        }
    }
    return count;
}


const Checkout = ({ }) => {

    const cart = useCart();

    const [selectedList, setSelectedList] = useState(Array(cart.cartContextObj.itemList.length).fill(true));

    const allTrue = checkIfAllTrue(selectedList);
    const numberOfTrue = getNumberOfTrue(selectedList);

    const handleSelectAll = () => {
        if (!allTrue) {
            setSelectedList(selectedList.map(() => true));
        }
    }

    const handleDeselectAll = () => {
        setSelectedList(selectedList.map(() => false));
    }

    console.log("checkout", cart, selectedList, Array(cart.cartContextObj.itemList.length).fill(true), `${numberOfTrue} out of ${selectedList.length} items selected`);

    return (
        <Box>
            <Box className="checkout" id="checkout-page"
                sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    width: '100%',
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
                                            Input Asset:
                                        </Typography>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box sx={{
                                            paddingLeft: "10px",
                                            marginBottom: "16px"
                                        }}>
                                            <FormControl component="fieldset">
                                                <RadioGroup
                                                    aria-label="mode-settings"
                                                    defaultValue="normal"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="normal" control={<Radio />} label="Normal" />
                                                    <FormControlLabel value="sweep" control={<Radio />} label="Sweep Mode" />
                                                </RadioGroup>
                                            </FormControl>

                                        </Box>
                                        <TextField
                                            label="Max Successful Orders"
                                            size="small"
                                            id="standard-size-normal"
                                            value={100}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            sx={{
                                                width: "100%",
                                            }}
                                        />

                                        <TextField
                                            label="Max Failures"
                                            size="small"
                                            id="standard-size-normal"
                                            value={100}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            sx={{
                                                width: "100%",
                                            }}
                                        />
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                            <Box sx={{
                                backgroundColor: "background.paperDark",
                                width: "100%"
                            }}
                                aria-label="mode">
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
                                        <Box sx={{
                                            paddingLeft: "10px",
                                            marginBottom: "16px"
                                        }}>
                                            <FormControl component="fieldset">
                                                <RadioGroup
                                                    aria-label="mode-settings"
                                                    defaultValue="normal"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="normal" control={<Radio />} label="Normal" />
                                                    <FormControlLabel value="sweep" control={<Radio />} label="Sweep Mode" />
                                                </RadioGroup>
                                            </FormControl>

                                        </Box>
                                        <TextField
                                            label="Max Successful Orders"
                                            size="small"
                                            id="standard-size-normal"
                                            value={100}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            sx={{
                                                width: "100%",
                                            }}
                                        />

                                        <TextField
                                            label="Max Failures"
                                            size="small"
                                            id="standard-size-normal"
                                            value={100}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            sx={{
                                                width: "100%",
                                            }}
                                        />
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
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
                                            Defaults:
                                        </Typography>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box sx={{
                                            paddingLeft: "10px",
                                            marginBottom: "16px"
                                        }}>
                                            <FormControl component="fieldset">
                                                <RadioGroup
                                                    aria-label="mode-settings"
                                                    defaultValue="normal"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="normal" control={<Radio />} label="Normal" />
                                                    <FormControlLabel value="sweep" control={<Radio />} label="Sweep Mode" />
                                                </RadioGroup>
                                            </FormControl>

                                        </Box>
                                        <TextField
                                            label="Max Successful Orders"
                                            size="small"
                                            id="standard-size-normal"
                                            value={100}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            sx={{
                                                width: "100%",
                                            }}
                                        />

                                        <TextField
                                            label="Max Failures"
                                            size="small"
                                            id="standard-size-normal"
                                            value={100}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            sx={{
                                                width: "100%",
                                            }}
                                        />
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
                                        <Box sx={{
                                            paddingLeft: "10px"
                                        }}>
                                            <FormControl component="fieldset">
                                                <RadioGroup
                                                    aria-label="failure-settings"
                                                    defaultValue="skip"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="skip" control={<Radio />} label="Skip and continue" />
                                                    <FormControlLabel value="revert" control={<Radio />} label="Revert transaction" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Box>
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
                                        <Box sx={{
                                            paddingLeft: "10px"
                                        }}>
                                            <FormControl component="fieldset">
                                                <RadioGroup
                                                    aria-label="erc1155-settings"
                                                    defaultValue="skip"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="skip" control={<Radio />} label="Skip and continue" />
                                                    <FormControlLabel value="buy-all-listed" control={<Radio />} label="Buy All Listed" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Box>
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
                            <Box
                                sx={{
                                    width: "100%",
                                    display: 'flex', flexDirection: 'column', gap: "24px",
                                    my: "32px"
                                }}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        display: 'flex', flexDirection: 'column', gap: "12px",
                                        // marginTop: "32px"
                                    }}>
                                    <Typography variant='h6'>
                                        Number of selected items:
                                    </Typography>
                                    <Typography variant='h6' color="primary">
                                        {`${numberOfTrue} out of ${selectedList.length}`}
                                    </Typography>
                                    <Typography variant='caption' color="text.secondary" sx={{
                                        fontStyle: 'italic',
                                    }}>
                                        You can edit your item selection below, doin so will update these totals.
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        width: "100%",
                                        display: 'flex', flexDirection: 'column', gap: "12px",
                                        marginTop: "0px"
                                    }}>
                                    <Typography variant='h6'>
                                        Maximum total price:
                                    </Typography>
                                    <Typography variant='h6' color="primary">
                                        12, 000, 000 $MAGIC
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{
                                my: "0px", display: 'flex', flexDirection: 'row',
                            }}>
                                <Button
                                    sx={{
                                        width: "100%",
                                    }}
                                    variant="contained" >Pay 12, 000, 000 $MAGIC</Button>
                            </Box>
                        </Box>

                    </Box>
                </Box>

            </Box>

            <Box
                sx={{
                    mx: "24px", my: "48px",
                }}>
                <Divider />
            </Box>


            <Box
                sx={{
                    mx: "24px",
                    marginBottom: "48px",
                }}
                id="selection-section">
                <Box sx={{
                    width: "100%",
                    display: 'flex', flexDirection: 'column', gap: "24px",
                }}>
                    <Typography variant="h4">
                        Selected Items
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Tap to select and deselect items. Changing your selection will update the total price above. The Order is the Order for which the Items will be purchased.
                    </Typography>
                </Box>

                <Box sx={{
                    marginTop: "32px",
                    marginBottom: "12px",
                }}>
                    <Typography variant="h5" color="primary">
                        {`${numberOfTrue} out of ${selectedList.length} items selected`}
                    </Typography>

                </Box>


                <Box sx={{
                    marginTop: "12px",
                    marginBottom: "0px",
                    display: 'flex', flexDirection: 'row', gap: "24px",
                }}>
                    <Box
                        sx={{
                            display: 'flex', flexDirection: 'column',
                            justifyContent: 'center', alignItems: 'center',
                        }}>

                        <Typography variant="h5" color="primary">
                            Select All
                        </Typography>
                    </Box>
                    <Box>
                        <Checkbox
                            edge="start"
                            // defaultChecked={true}
                            checked={true}
                            tabIndex={-1}
                            disableRipple
                            // inputProps={{ "aria-labelledby": labelId }}
                            sx={{
                                height: "100%",
                            }}

                            onClick={handleSelectAll}
                        />
                    </Box>

                </Box>
                <Box sx={{
                    marginTop: "0px",
                    marginBottom: "0px",
                    display: 'flex', flexDirection: 'row', gap: "24px",
                }}>
                    <Box
                        sx={{
                            display: 'flex', flexDirection: 'column',
                            justifyContent: 'center', alignItems: 'center',
                        }}>

                        <Typography variant="h5" color="primary">
                            Deselect All
                        </Typography>
                    </Box>
                    <Box>
                        <Checkbox
                            edge="start"
                            // defaultChecked={true}
                            checked={true}
                            tabIndex={-1}
                            disableRipple
                            // inputProps={{ "aria-labelledby": labelId }}
                            sx={{
                                height: "100%",
                            }}

                            onClick={handleDeselectAll}
                        />
                    </Box>

                </Box>

                <Box sx={{
                    marginTop: "0px",
                    marginBottom: "24px",
                    display: 'flex', flexDirection: 'row', gap: "24px",
                }}>
                    <Box
                        sx={{
                            display: 'flex', flexDirection: 'column',
                            justifyContent: 'center', alignItems: 'center',
                        }}>

                        <Typography variant="h5" color="primary">
                            Remove All
                        </Typography>
                    </Box>
                    <Box>
                        <Checkbox
                            edge="start"
                            // defaultChecked={true}
                            checked={true}
                            tabIndex={-1}
                            disableRipple
                            // inputProps={{ "aria-labelledby": labelId }}
                            sx={{
                                height: "100%",
                            }}

                            onClick={() => { cart.cartContextObj.removeAllItems(); handleDeselectAll(); }}
                        />
                    </Box>

                </Box>


                <Box id="selection-stack"
                    sx={{
                        width: "100%",

                        display: 'flex', flexDirection: 'column', gap: "4px",
                    }}>


                    <CartSelectionCardsList
                        itemList={cart.cartContextObj.itemList}
                        selectedList={selectedList}
                        setSelectedList={setSelectedList}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Checkout