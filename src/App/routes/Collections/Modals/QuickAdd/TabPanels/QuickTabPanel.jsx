
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

const QuickTabPanel = ({ value, index, }) => {

    const [numberValue, setNumberValue] = useState(0);
    const handleOnChangeNumberValue = (event) => {
        if (event.target.value.length > 0) {
            setNumberValue(event.target.value);
        }
    }

    return (
        <TabPanel value={value} index={index} >
            <Box
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
                        flexGrow: 2,
                        minWidth: '100px',
                        width: '40%',
                    }}>
                    <TextField
                        id="outlined-number"
                        label="End Index"
                        size="small"
                        type="number"
                        value={numberValue}
                        onChange={handleOnChangeNumberValue}
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

export default QuickTabPanel;