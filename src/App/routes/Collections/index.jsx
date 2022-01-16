
import { useState } from 'react';

import { useTheme } from '@mui/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Collapse from '@mui/material/Collapse';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

import TopBox from './TopBox/TopBox';
import SortSelect from './SortSelect/SortSelect';
import SizeSelect from './SizeSelect/SizeSelect';
import SearchBar from './SearchBar/SearchBar';
import CardGrid from './CardGrid/CardGrid';
import PropertiesDrawer from './Drawer/PropertiesDrawer';

import SortSelectOptions from './SortSelect/SortSelectOptions';
import { SizeSelectOptions, CardSizes } from './SizeSelect/SizeSelectOptions';

import useWindowDimensions from "../../../hooks/useWindowDimensions";

import useLocalStorage from '../../../hooks/useLocalStorage';

const drawerWidth = 330;
const drawerMinWidth = 38;
const pageMX = 24;
const gridMLeft = 32;
const gridScrollBarWidth = 16.8;
// const cardMinMarginX = 5;
// const cardMinMarginY = 14;

function calculateGridSize(windowWidth, cardSize, drawerOn = false) {

    // console.log("calculateGridSize", windowWidth, cardSize, drawerOn, CardSizes[cardSize].widthPixel);

    const minMarginX = CardSizes[cardSize].minMarginX;
    const minMarginY = CardSizes[cardSize].minMarginY;

    let gridWidth = windowWidth - pageMX - pageMX - gridMLeft - gridScrollBarWidth;

    if (drawerOn) {
        gridWidth -= drawerWidth;
    } else {
        gridWidth -= drawerMinWidth;
    }
    // console.log("gridWidth", gridWidth, cardSize, (CardSizes[cardSize].widthPixel + minMarginX));

    let columnSize = Math.floor(gridWidth / (CardSizes[cardSize].widthPixel + minMarginX));
    let cardWidthWithMargin = (columnSize !== 0) ? gridWidth / columnSize : CardSizes[cardSize].widthPixel;
    if (cardWidthWithMargin < CardSizes[cardSize].widthPixel + minMarginX) {
        cardWidthWithMargin = CardSizes[cardSize].widthPixel;
        columnSize = 1;
    } else {
        cardWidthWithMargin = CardSizes[cardSize].widthPixel + minMarginX;
    }
    const cardHeightWithMargin = CardSizes[cardSize].heightPixel + minMarginY;

    // console.log("cardWidthWithMargin", cardWidthWithMargin, "cardHeightWithMargin", cardHeightWithMargin, "columnSize", columnSize);
    return { gridWidth, columnSize, cardWidthWithMargin, cardHeightWithMargin };
}



const Collections = ({ network }) => {
    const theme = useTheme();

    const { width } = useWindowDimensions();

    // for search bar and chips
    const [searchList, setSearchList] = useState([]);

    // for sort by selectoion
    const [sortBy, setSortBy] = useState(SortSelectOptions[0]);

    // for Card size selection
    const [cardSize, setCardSize] = useLocalStorage('cardSize', SizeSelectOptions[1]);

    // for drawer
    const [open, setOpen] = useState(false);

    const { gridWidth, columnSize, cardWidthWithMargin, cardHeightWithMargin } = calculateGridSize(width, cardSize, open);
    // console.log('gridWidth: ', gridWidth, 'columnSize: ', columnSize, "width: ", width, "cardWidthWithMargin: ", cardWidthWithMargin, "cardHeightWithMargin: ", cardHeightWithMargin);

    return (
        <Box id="collections-main-page"
            sx={{
                padding: "0px", mx: `${pageMX}px`,
                display: 'flex', flexDirection: 'column',
            }}
        >

            <TopBox />
            <Divider ></Divider>

            <Box id="collection-main-box" sx={{ marginTop: "32px", mx: "0px", display: "flex", flexDirection: "row" }}>

                <PropertiesDrawer drawerWidth={drawerWidth} drawerMinWidth={drawerMinWidth} open={open} setOpen={setOpen} />

                <Box id="collection-main-right-box" sx={{ flexGrow: "1", marginLeft: `${gridMLeft}px`, }}>
                    <Box id="collection-grid-top-box" sx={{ display: "flex", flexDirection: "row", alignContent: "stretch", flexWrap: "wrap", gap: "24px" }}>
                        <Box id="collection-search-box" sx={{ minWidth: "200px", flexGrow: "10" }}>
                            <SearchBar searchList={searchList} setSearchList={setSearchList} />
                        </Box>

                        <Box id="collection-sort-box" sx={{ width: "220px", minWidth: "100px", flexGrow: "3" }}>
                            <SortSelect sortBy={sortBy} setSortBy={setSortBy} />
                        </Box>

                        <Box id="collection-size-box" sx={{ width: "80px", minWidth: "60px", flexGrow: "1" }}>
                            <SizeSelect cardSize={cardSize} setCardSize={setCardSize} />
                        </Box>
                    </Box>
                    <Box id="grid-info" sx={{ my: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                        <Box id="results-text">
                            <Typography variant="body2" color={theme.palette.text.secondary}>
                                1234 results
                            </Typography>
                        </Box>
                        {
                            searchList && searchList.length !== 0 &&
                            (

                                <Box id="search-chips-box" sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                                    {searchList.map((item, index) => {
                                        return (
                                            <Chip key={index} label={item} color="secondary" onDelete={() => { setSearchList(searchList.filter((value) => { return (value !== item) })) }} />
                                        )
                                    })
                                    }
                                </Box>
                            )
                        }
                    </Box>
                    <Box id="collection-grid-main-box">
                        <CardGrid gridWidth={gridWidth} columnSize={columnSize} cardWidthWithMargin={cardWidthWithMargin} cardHeightWithMargin={cardHeightWithMargin} cardSize={cardSize} />
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}


export default Collections