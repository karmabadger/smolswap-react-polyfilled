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



const PropertySection = ({ section }) => {
    const propertiesList = [
        ["green", 13.75],
        ["gray", 13.86],
        ["red", 14.15],
        ["orange", 14.25],
        ["cyan", 14.49],
        ["yellow", 14.7],
        ["purple", 14.85],
        ["pink", 15.1],
    ]

    const [propertiesCheckedList, setPropertiesCheckedList] = useState(
        (new Array(propertiesList.length).fill(false)));


    const handleChange = (choiceIndex) => {
        return (event) => {
            setPropertiesCheckedList(propertiesCheckedList.map((property, index) => {
                if (index === choiceIndex) {
                    return event.target.checked;
                }
                return property;
            }));
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

                        {propertiesList.map((property, index) => (

                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox checked={propertiesCheckedList[index]} size='small' onChange={handleChange(index)} name={property[0]} />
                                }
                                label={<Typography variant="body2" color="text.secondary">{`${property[0]} (${property[1]}%)`}</Typography>}
                            />
                        ))}

                    </FormGroup>
                </FormControl>
            </AccordionDetails>
        </Accordion>
    )
}

export default PropertySection;