
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
// import { DateTime } from "luxon";
// import fromNow from "from-now";

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

import ListItemIcon from "@mui/material/ListItemIcon";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import TabPanel from "./TabPanel";

import IosShareIcon from '@mui/icons-material/IosShare';
import IconButton from '@mui/material/IconButton';
import { strWeiToETH } from "utils/erc/erc20utils";


const SettingsTabPanel = ({ value, index, }) => {

    // const listings = token.listings

    // return (
    //     <TabPanel value={value} index={index}>
    //         This is the settings tab panel
    //     </TabPanel>
    // )
    return (
        <TabPanel value={value} index={index}>
            {/* <Box
                sx={{
                    display: 'flex', flexDirection: 'row', alignItems: 'center', gap: "0px"
                }}> */}

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

                {/* <Box
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
                    </Box> */}
            </Box>
            {/* </Box> */}

        </TabPanel >
    );
}

export default SettingsTabPanel;