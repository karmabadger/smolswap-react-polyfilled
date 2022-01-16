



import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import TextField from '@mui/material/TextField';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import Checkbox from '@mui/material/Checkbox';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import CartSelectionCard from "./CartSelectionCards/CartSelectionCards";


export default function CheckboxListSecondary() {
    const [checkedList, setCheckedList] = useState([true, true, true, true, true, true, true, true, true, true, true, true]);

    const checkAll = (arr, value) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === !value) {
                return false;
            }
        }
        return true;
    }

    const handleToggle = (index) => () => {
        setCheckedList(checkedList.map((item, i) => i === index ? !item : item));
    };

    return (
        <DragDropContext
        // onDragEnd={result => onDragEnd(result)}
        >
            <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
                {/* <Droppable draggableId="1" index={0}> */}
                    {[true, true, true, true, true, true, true, true, true, true, true, true].map((value, index) => {
                        const labelId = `checkbox-list-secondary-label-${value}`;
                        return (
                            // <Draggable droppableId="1" key={index}>
                            <ListItem key={index}
                                sx={{
                                    px: "0px",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    // alignItems: "stretch",
                                }}>

                                <Box

                                    id="checkbox-flexer"
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center"

                                    }}>


                                    <Box
                                        id="checkbox-container"
                                        sx={{
                                            height: "100%",
                                            flexGrow: "1"
                                        }}
                                        onClick={handleToggle(index)}
                                    >
                                        <ListItemButton
                                            sx={{
                                                height: "84px",
                                                px: "0px",
                                            }}>

                                            <ListItemIcon
                                                sx={{
                                                    paddingLeft: "16px",
                                                    paddingRight: "16px",
                                                    minWidth: 0,
                                                    height: "100%",
                                                }}
                                            >
                                                <Checkbox
                                                    edge="start"
                                                    // defaultChecked={true}
                                                    checked={checkedList[index]}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    inputProps={{ "aria-labelledby": labelId }}
                                                    sx={{
                                                        height: "100%",
                                                    }}
                                                />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </Box>
                                </Box>
                                <CartSelectionCard handleToggle={handleToggle} value={value} />
                            </ListItem>
                            // </Draggable>
                        );
                    })}
                {/* </Droppable> */}
            </List >
        </DragDropContext>
    );
}




