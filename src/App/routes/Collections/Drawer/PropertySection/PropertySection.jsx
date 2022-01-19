import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Collapse from '@mui/material/Collapse';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

// import { DECIMALS, strETHToWei, strWeiToETH } from 'utils/erc/erc20utils.js'


const PropertySection = ({ attribute, attributeIndex, attributesList, setAttributesList, attributesChecked, setAttributesChecked }) => {
    // console.log("attributesList", attributesList, attribute, index);
    const section = attribute.name;

    const propertiesList = attribute.list;

    // const [propertiesCheckedList, setPropertiesCheckedList] = useState(
    //     (new Array(attributesList.length).fill(false)));

    // console.log("checked", attributesChecked[attributeIndex]);

    const handleChange = (choiceIndex) => {
        return (event) => {

            const allFalse = [...attributesChecked];
            allFalse[attributeIndex][choiceIndex] = event.target.checked;

            console.log("allFalse", allFalse);
            setAttributesChecked(allFalse);
        };
    }



    return (
        <Accordion disableGutters elevation={0}
            key={section}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography sx={{ flexShrink: 0 }}>
                    {section}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormControl sx={{ m: 0 }} component="fieldset" variant="standard">
                    <FormGroup>

                        {propertiesList.map((property, index) => {

                            const checked = (attributesChecked[attributeIndex][index] == null) ? false : attributesChecked[attributeIndex][index];
                            return (

                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox checked={checked} size='small' onChange={handleChange(index)} name={property[0]} />
                                    }
                                    label={<Typography variant="body2" color="text.secondary">{`${property.value} (${(parseFloat(property.percentage) * 100).toFixed(2)}%)`}</Typography>}
                                />
                            )
                        }
                        )}

                    </FormGroup>
                </FormControl>
            </AccordionDetails>
        </Accordion>
    )
}

export default PropertySection;