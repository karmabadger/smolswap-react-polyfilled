import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import SortSelectOptions from './SortSelectOptions';

export function SortSelect({ sortBy, setSortBy }) {

    const handleChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortBy}
                    label="SortBy"
                    onChange={handleChange}
                // size="small"
                >

                    {SortSelectOptions.map((option, index) => {
                        return (
                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}

export default SortSelect;