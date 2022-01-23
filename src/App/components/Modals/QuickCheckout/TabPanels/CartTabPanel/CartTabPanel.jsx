
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
// import { DateTime } from "luxon";
// import fromNow from "from-now";

import Checkbox from "@mui/material/Checkbox";

import ListItemIcon from "@mui/material/ListItemIcon";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import TabPanel from "../TabPanel";

import IosShareIcon from '@mui/icons-material/IosShare';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { strWeiToETH } from "utils/erc/erc20utils";

import useCart from "hooks/useCart";

import CartSelectionCardsList from "./CartSelectionCards/CartSelectionCardsList";

import RemoveAllModal from "../../Modals/RemoveAllModal";

const CartTabPanel = ({
    value, index,
    handleSelectAll,
    handleDeselectAll,
    handleRemoveAll,
    handleClickRemoveAll,

    selectedList,
    numberOfTrue,
    setSelectedList,

    openSureModal,
    setOpenSureModal,
}) => {

    const cart = useCart();

    const handleClose = () => {
        setOpenSureModal(false);
    }

    return (
        <Box
            sx={{
                // width: "2000px",
            }}>
            <TabPanel value={value} index={index}
                sx={{
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        mx: "24px",
                        marginBottom: "48px",
                    }}
                    id="selection-section">

                    <RemoveAllModal
                        open={openSureModal}
                        setOpen={setOpenSureModal}
                        handleRemoveAll={handleRemoveAll}
                        handleClose={handleClose}

                    />
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

                                onClick={handleClickRemoveAll}
                            />
                        </Box>

                    </Box>


                    <Box id="selection-stack"
                        sx={{
                            width: "100%",

                            display: 'flex', flexDirection: 'column', gap: "4px",
                        }}>

                        {
                            (selectedList.length > 0) &&
                            <CartSelectionCardsList
                                itemList={cart.cartContextObj.itemList}
                                selectedList={selectedList}
                                setSelectedList={setSelectedList}
                            />
                        }
                    </Box>
                </Box>
            </TabPanel >
        </Box >
    );
}

export default CartTabPanel;