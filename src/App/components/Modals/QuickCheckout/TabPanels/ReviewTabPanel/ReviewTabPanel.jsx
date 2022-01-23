
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
import TabPanel from "../TabPanel";

import IosShareIcon from '@mui/icons-material/IosShare';
import IconButton from '@mui/material/IconButton';
import { strWeiToETH } from "utils/erc/erc20utils";

import useCart from "hooks/useCart";

const ReviewTabPanel = ({ value, index,
    numberOfTrue,
    selectedList,
}) => {

    const cart = useCart();
    // console.log("ReviewTabPanel.jsx: selectedList", selectedList, "numberOfTrue", numberOfTrue);

    const maxTotalPrice = strWeiToETH(cart.cartContextObj.getSelectedListTotalMaxPrice().toString());
    const totalPrice = strWeiToETH(cart.cartContextObj.getSelectedListTotalPrice().toString());
    return (
        <TabPanel value={value} index={index}>

            <Box id="checkout-settings"
                sx={{
                    my: 0, width: "500px", flexShrink: "1", flexGrow: "1", minWidth: "300px", display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "48px"
                }}>


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
                                You can edit your item selection below, doing so will update these totals.
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
                                {maxTotalPrice} $MAGIC
                            </Typography>

                            <Box>
                                <Typography variant='body2'
                                    color="textSecondary">
                                    Real total price:
                                </Typography>
                                <Typography variant='body2' color="secondary">
                                    {totalPrice} $MAGIC
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{
                        my: "0px", display: 'flex', flexDirection: 'row',
                    }}>
                        <Button
                            sx={{
                                width: "100%",
                            }}
                            variant="contained" >`Pay ${maxTotalPrice} $MAGIC`</Button>
                    </Box>
                </Box>
            </Box>

        </TabPanel >
    );
}

export default ReviewTabPanel;