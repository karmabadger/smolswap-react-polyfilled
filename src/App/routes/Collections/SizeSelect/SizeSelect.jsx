import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { SizeSelectOptions } from './SizeSelectOptions';

export function SizeSelect({ cardSize, setCardSize }) {

    const handleChange = (event) => {
        setCardSize(event.target.value);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cardSize}
                    label="Size"
                    onChange={handleChange}
                // size="small"
                >

                    {SizeSelectOptions.map((option, index) => {
                        return (
                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}

export default SizeSelect;