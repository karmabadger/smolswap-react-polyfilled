import {useState} from "react";

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

const ByIndexTabPanel = ({ value, index, item, token }) => {

    const [startIndex, setStartIndex] = useState(0);
    const handleOnChangeStartIndex = (event) => {
        if (event.target.value > 0) {
            setStartIndex(event.target.value);
        }
    };

    const [endIndex, setEndIndex] = useState(0);
    const handleOnChangeEndIndex = (event) => {
        if (event.target.value > 0) {
            setEndIndex(event.target.value);
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
                        label="Start Index"
                        size="small"
                        type="number"
                        value={startIndex}
                        onChange={handleOnChangeStartIndex}
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
                        label="End Index"
                        size="small"
                        type="number"
                        value={endIndex}
                        onChange={handleOnChangeEndIndex}
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

export default ByIndexTabPanel;