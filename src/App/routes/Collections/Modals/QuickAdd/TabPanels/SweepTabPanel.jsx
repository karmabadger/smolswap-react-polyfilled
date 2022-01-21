import { useState } from "react";


import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import ListItemIcon from "@mui/material/ListItemIcon";


import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import TabPanel from "./TabPanel";

const SweepTabPanel = ({ value, index, }) => {
    const [undePrice, setUnderPrice] = useState(0);
    const handleOnChangeUnderPrice = (event) => {
        if (event.target.value > 0) {
            setUnderPrice(event.target.value);
        }
    };

    const [maxItems, setMaxItems] = useState(0);
    const handleOnChangeMaxItems = (event) => {
        if (event.target.value > 0) {
            setMaxItems(event.target.value);
        }
    };

    return (
        <TabPanel value={value} index={index} >
            <Box
                // noValidate
                component="form"
                sx={{
                    my: "14px",
                    display: 'flex',
                    flexDirection: 'row',
                    width: 'fit-content',
                    gap: '5px',
                    flexWrap: 'wrap',
                }}
            >
                <Box
                    sx={{
                        flexGrow: 1,
                        minWidth: '100px',
                        width: '40%',
                        // width: "30%",
                    }}>
                    <TextField
                        id="outlined-number"
                        label="Under Price"
                        size="small"
                        type="number"
                        value={undePrice}
                        onChange={handleOnChangeUnderPrice}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        flexGrow: 2,
                        minWidth: '100px',
                        width: '40%',
                    }}>
                    <TextField
                        id="outlined-number"
                        label="Max Number of Items"
                        size="small"
                        type="number"
                        value={maxItems}
                        onChange={handleOnChangeMaxItems}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
                <Box>
                    <Button
                        color="secondary"
                        variant="contained"
                        size="large"
                    >
                        Add
                    </Button>
                </Box>
            </Box>
        </TabPanel>
    )
}

export default SweepTabPanel;