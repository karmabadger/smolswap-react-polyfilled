



import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
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

import CartSelectionCard from "./CartSelectionCard";
import useCart from 'hooks/useCart';

export default function CheckboxListSecondary({ itemList, selectedList, setSelectedList }) {
    const theme = useTheme();

    const cart = useCart();
    // const [checkedList, setCheckedList] = useState([true, true, true, true, true, true, true, true, true, true, true, true]);

    const handleDragEnd = (result) => {
        console.log("drag end", result);

        const { destination, source } = result;


        if (destination) {
            const droppedItem = itemList[source.index];
            const newItemList = [];

            const droppedSelectedItem = selectedList[source.index];
            const newSelectedList = [];

            let sourceIndex = 0;
            for (let i = 0; i < itemList.length; i++) {
                if (i === destination.index) {
                    newItemList.push(droppedItem);
                    newSelectedList.push(droppedSelectedItem);
                } else {
                    if (sourceIndex !== source.index) {
                        newItemList.push(itemList[sourceIndex]);
                        newSelectedList.push(selectedList[sourceIndex]);
                        sourceIndex++;
                    } else {
                        sourceIndex++;
                        newItemList.push(itemList[sourceIndex]);
                        newSelectedList.push(selectedList[sourceIndex]);
                        sourceIndex++;
                    }
                }
            }

            console.log("new item list", newItemList);
            console.log("new selected list", newSelectedList);

            cart.cartContextObj.itemList = newItemList;
            setSelectedList(newSelectedList);
        }
    }

    const handleToggle = (index) => () => {
        cart.cartContextObj.setSelected(index, !selectedList[index]);
        setSelectedList(selectedList.map((item, i) => i === index ? !item : item));
    };


    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        padding: 0,
        margin: `0 0 0 0`,

        // change background colour if dragging
        background: isDragging ? theme.palette.secondary.main : "grey",

        // styles we need to apply on draggables
        ...draggableStyle
    });

    const getListStyle = (isDraggingOver) => ({
        background: isDraggingOver ? theme.palette.primary.main : "lightgrey",
    });

    return (
        <DragDropContext
            onDragEnd={result => handleDragEnd(result)}
        >
            <List dense sx={{
                width: "100%", bgcolor: "background.paper",
                p: 0,
            }}>

                <Droppable droppableId="droppable" >
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {
                                itemList.map((value, index) => {
                                    // const labelId = `checkbox-list-secondary-label-${value}`;
                                    return (
                                        <Draggable draggableId={index.toString()} index={index} key={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}
                                                >
                                                    <ListItem key={index}
                                                        sx={{
                                                            px: "0px",
                                                            py: "2px",
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
                                                                            checked={(selectedList[index]) ? selectedList[index] : false}
                                                                            tabIndex={-1}
                                                                            disableRipple
                                                                            // inputProps={{ "aria-labelledby": labelId }}
                                                                            sx={{
                                                                                height: "100%",
                                                                            }}
                                                                        />
                                                                    </ListItemIcon>
                                                                </ListItemButton>
                                                            </Box>
                                                        </Box>
                                                        <CartSelectionCard
                                                            handleToggle={handleToggle}
                                                            item={value}
                                                            selectedList={selectedList}
                                                            setSelectedList={setSelectedList}
                                                            value={selectedList[index]}
                                                            itemIndex={index}
                                                        />
                                                    </ListItem>
                                                </div>
                                            )}

                                        </Draggable>
                                    );
                                })
                            }
                        </div>
                    )}
                </Droppable>
            </List >
        </DragDropContext>
    );
}




