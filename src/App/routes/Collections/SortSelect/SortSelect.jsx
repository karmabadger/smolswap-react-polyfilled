import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { SortSelectOptions, SortSelectOptionsObj } from './SortSelectOptions';

export function SortSelect({ sortBy, setSortBy }) {

    const handleChange = (event) => {
        setSortBy(event.target.value);
    };

    // console.log("sortByIn", sortBy);

    return (
        <Box sx={{ width: "100%" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                    defaultChecked={sortBy}
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