import { useState } from 'react';

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

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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
import TabPanel from "../TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import FormLabel from '@mui/material/FormLabel';

import IosShareIcon from '@mui/icons-material/IosShare';
import IconButton from '@mui/material/IconButton';
import { strWeiToETH } from "utils/erc/erc20utils";
// import { FormLabel } from '@mui/material';



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}


const SettingsTabPanel = ({
    value, index,
}) => {

    const [inputAssetTabValue, setInputAssetTabValue] = useState(0);
    const handleChangeInputAssetTabValue = (event, newValue) => {
        setInputAssetTabValue(newValue);
    };

    const [inputAssetType, setInputAssetType] = useState('ETH');
    const handleChangeInputAssetType = (event) => {
        setInputAssetType(event.target.value);
    };

    const [inputAssetAddress, setInputAssetAddress] = useState('0x0000000000000000000000000000000000000000');
    const handleChangeInputAssetAddress = (event) => {
        setInputAssetAddress(event.target.value);
    };

    const [deadlineTime, setDealineTime] = useState(100);
    const handleChangeDeadlineTime = (event) => {
        setDealineTime(event.target.value);
    };

    const [slippage, setSlippage] = useState(2);
    const handleChangeSlippage = (event) => {
        setSlippage(event.target.value);
    };

    const [DEXId, setDEXId] = useState(0);
    const DEXList = [
        {
            id: 0,
            name: 'Uniswapv2',
            address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
        },
        {
            id: 1,
            name: 'Sushiswap',
            address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
        },
    ]

    const handleChangeDEXId = (event) => {
        setDEXId(event.target.value);
    };

    const [refundInInputAsset, setRefundInInputAsset] = useState(false);
    const handleChangeRefundAsset = (event) => {
        if (event.target.checked) {
            setRefundInInputAsset(true);
        } else {
            setRefundInInputAsset(false);
        }
    };


    const [modeTabValue, setModeTabValue] = useState(0);
    const handleChangeModeTabValue = (event, newValue) => {
        setModeTabValue(newValue);
    };

    const [maxSuccess, setMaxSuccess] = useState(100);
    const handleChangeMaxSuccess = (event) => {
        setMaxSuccess(event.target.value);
    };

    const [maxFail, setMaxFail] = useState(100);
    const handleChangeMaxFail = (event) => {
        setMaxFail(event.target.value);
    };

    const [maxTotalPrice, setMaxTotalPrice] = useState(100);
    const handleChangeMaxTotalPrice = (event) => {
        setMaxTotalPrice(event.target.value);
    };

    const [minSpendAmount, setMinSpendAmount] = useState(100);
    const handleChangeMinSpendAmount = (event) => {
        setMinSpendAmount(event.target.value);
    };


    const [firstFailAction, setFirstFailAction] = useState('SKIP');
    const handleChangeFirstFailAction = (event) => {
        setFirstFailAction(event.target.value);
    };

    const [allFailAction, setAllFailAction] = useState('SKIP');
    const handleChangeAllFailAction = (event) => {
        setAllFailAction(event.target.value);
    };

    const [ERC1155InsufficientQuantitiesAction, setERC1155InsufficientQuantitiesAction] = useState('SKIP');
    const handleChangeERC1155InsufficientQuantitiesAction = (event) => {
        setERC1155InsufficientQuantitiesAction(event.target.value);
    };

    return (
        <TabPanel value={value} index={index}>

            <Box id="checkout-settings"
                sx={{
                    my: 0, width: "100%", flexShrink: "1", flexGrow: "1", minWidth: "300px", display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "48px"
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

                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={inputAssetTabValue} onChange={handleChangeInputAssetTabValue} aria-label="basic tabs example">
                                            <Tab label="$Magic" {...a11yProps(0)} />
                                            <Tab label="Other" {...a11yProps(1)} />
                                        </Tabs>
                                    </Box>

                                    <Box>
                                        <TabPanel value={inputAssetTabValue} index={0}>
                                            <RadioGroup
                                                aria-label="mode-settings"
                                                defaultValue="magic"
                                                name="radio-buttons-group"
                                            >
                                                <FormControlLabel value="magic" control={<Radio />} label="$MAGIC" />
                                            </RadioGroup>
                                        </TabPanel>

                                        <TabPanel value={inputAssetTabValue} index={1}>
                                            <FormControl component="fieldset"
                                                sx={{
                                                    width: "100%",
                                                }}
                                            >
                                                <FormLabel component="legend">Select input asset</FormLabel>
                                                <RadioGroup
                                                    aria-label="mode-settings"
                                                    // defaultValue="eth"
                                                    value={inputAssetType}
                                                    name="radio-buttons-group"
                                                    sx={{
                                                        width: "100%",
                                                    }}
                                                    onChange={handleChangeInputAssetType}
                                                >
                                                    <FormControlLabel value="ETH" control={<Radio />} label="$ETH" />

                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            flexWrap: 'wrap',
                                                        }}>

                                                        <Box
                                                            sx={{
                                                                flexShrink: 0,
                                                            }}>

                                                            <FormControlLabel value="ERC20" control={<Radio />} label="Other ERC20" />
                                                        </Box>
                                                        <TextField
                                                            disabled={inputAssetType === 'ETH'}
                                                            label="ERC20 address"
                                                            size="small"
                                                            id="standard-size-normal"
                                                            value={inputAssetAddress}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            sx={{
                                                                flexGrow: 1,
                                                            }}
                                                            onChange={handleChangeInputAssetAddress}
                                                        />
                                                    </Box>
                                                </RadioGroup>
                                            </FormControl>

                                            <Box
                                                sx={{
                                                    my: 3,
                                                }}>
                                                <FormControl fullWidth>
                                                    <FormLabel component="legend">Choose your DEX:</FormLabel>
                                                    <Select
                                                        size="small"
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={DEXId}
                                                        label="DEX"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        sx={{
                                                            width: "100%",
                                                        }}
                                                        onChange={handleChangeDEXId}
                                                    >
                                                        {DEXList.map((item, index) => (
                                                            <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Box>

                                            <Box
                                                sx={{
                                                    marginTop: 3, width: "100%", display: 'flex', flexDirection: 'row',
                                                    flexWrap: 'wrap',
                                                }}
                                            >

                                                <TextField
                                                    label="Deadline Time (minutes)"
                                                    size="small"
                                                    id="standard-size-normal"
                                                    value={deadlineTime}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    sx={{
                                                        width: "100%",
                                                    }}
                                                    onChange={handleChangeDeadlineTime}
                                                />

                                                <TextField
                                                    label="Slippage (in %)"
                                                    size="small"
                                                    id="standard-size-normal"
                                                    value={slippage}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    sx={{
                                                        width: "100%",
                                                    }}
                                                    onChange={handleChangeSlippage}
                                                />
                                            </Box>

                                            <Box
                                                sx={{
                                                    marginTop: 3, width: "100%", display: 'flex', flexDirection: 'row',
                                                }}>

                                                <FormControl component="fieldset"
                                                    sx={{
                                                        width: "100%",
                                                    }}
                                                >
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={refundInInputAsset}
                                                                onChange={handleChangeRefundAsset}
                                                                name="refundininput" />
                                                        }
                                                        label="Refund In Input Asset (Leave blank for $MAGIC)"
                                                    />
                                                </FormControl>
                                            </Box>

                                        </TabPanel>
                                    </Box>


                                </Box>
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
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={modeTabValue} onChange={handleChangeModeTabValue} aria-label="basic tabs example">
                                            <Tab label="Normal" {...a11yProps(0)} />
                                            <Tab label="Sweep" {...a11yProps(1)} />
                                        </Tabs>
                                    </Box>

                                    <Box>
                                        <TabPanel value={modeTabValue} index={0}>
                                            <Box>
                                                <FormControl component="fieldset">
                                                    <RadioGroup
                                                        aria-label="mode-settings"
                                                        defaultValue="normal"
                                                        name="radio-buttons-group"
                                                    >
                                                        <FormControlLabel value="normal" control={<Radio />} label="Normal" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Box>

                                            <TextField
                                                label="Max Total Amount To Spend"
                                                size="small"
                                                id="standard-size-normal"
                                                value={maxTotalPrice}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                sx={{
                                                    width: "100%",
                                                }}
                                                onChange={handleChangeMaxTotalPrice}
                                            />
                                        </TabPanel>


                                        <TabPanel value={modeTabValue} index={1}>
                                            <Box>
                                                <FormControl component="fieldset">
                                                    <RadioGroup
                                                        aria-label="mode-settings"
                                                        defaultValue="sweep"
                                                        name="radio-buttons-group"
                                                    >
                                                        <FormControlLabel value="sweep" control={<Radio />} label="Sweep" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Box>

                                            <TextField
                                                label="Max Total Amount To Spend (in $MAGIC)"
                                                size="small"
                                                id="standard-size-normal"
                                                value={maxTotalPrice}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                sx={{
                                                    width: "100%",
                                                }}
                                                onChange={handleChangeMaxTotalPrice}
                                            />

                                            <TextField
                                                label="Min Total Amount To Spend (in $MAGIC) (as soon as this is reached, will end.)"
                                                size="small"
                                                id="standard-size-normal"
                                                value={minSpendAmount}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                sx={{
                                                    width: "100%",
                                                }}
                                                onChange={handleChangeMinSpendAmount}
                                            />

                                            <TextField
                                                label="Max Number of Successful buys"
                                                size="small"
                                                id="standard-size-normal"
                                                value={maxSuccess}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                sx={{
                                                    width: "100%",
                                                }}
                                                onChange={handleChangeMaxSuccess}
                                            />

                                            <TextField
                                                label="Min Number of Successful buys"
                                                size="small"
                                                id="standard-size-normal"
                                                value={maxFail}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                sx={{
                                                    width: "100%",
                                                }}
                                                onChange={handleChangeMaxFail}
                                            />

                                        </TabPanel>
                                    </Box>
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
                                    In Case of Failure:
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box sx={{
                                    paddingLeft: "10px"
                                }}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">
                                            First Failure:
                                        </FormLabel>
                                        <RadioGroup
                                            aria-label="failure-settings"
                                            // defaultValue="skip"
                                            name="radio-buttons-group"
                                            value={firstFailAction}
                                            onChange={handleChangeFirstFailAction}
                                        >
                                            <FormControlLabel value="skip" control={<Radio />} label="Skip and continue" />
                                            <FormControlLabel value="revert" control={<Radio />} label="Revert transaction" />
                                        </RadioGroup>
                                    </FormControl>


                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">
                                            All Failed:
                                        </FormLabel>
                                        <RadioGroup
                                            aria-label="failure-settings"
                                            // defaultValue="skip"
                                            name="radio-buttons-group"
                                            value={allFailAction}
                                            onChange={handleChangeAllFailAction}
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
                                        <FormLabel component="legend">
                                            Insufficient Listed Quantity:
                                        </FormLabel>
                                        <RadioGroup
                                            aria-label="erc1155-settings"
                                            // defaultValue="buyMax"
                                            name="radio-buttons-group"
                                            value={ERC1155InsufficientQuantitiesAction}
                                            onChange={handleChangeERC1155InsufficientQuantitiesAction}
                                        >
                                            <FormControlLabel value="skip" control={<Radio />} label="Skip and continue" />
                                            <FormControlLabel value="buyMax" control={<Radio />} label="Buy The Rest Listed (on the same listing)" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>

            </Box>
        </TabPanel >
    );
}

export default SettingsTabPanel;