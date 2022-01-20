
import { useState, useEffect, useContext } from 'react';

import { useParams } from 'react-router-dom'

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

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import TopBox from './TopBox/TopBox';
import SortSelect from './SortSelect/SortSelect';
import SizeSelect from './SizeSelect/SizeSelect';
import SearchBar from './SearchBar/SearchBar';
import CardGrid from './CardGrid/CardGrid';
import PropertiesDrawer from './Drawer/PropertiesDrawer';

import { SortSelectOptions, SortSelectOptionsObj, SortSelectOptionsERC1155, SortSelectOptionsERC1155Obj } from './SortSelect/SortSelectOptions';
import { SizeSelectOptions, CardSizes } from './SizeSelect/SizeSelectOptions';

import useWindowDimensions from "../../../hooks/useWindowDimensions";

import useLocalStorage from '../../../hooks/useLocalStorage';

import useNetwork from '../../../hooks/useNetwork';

import NetworkContext from 'App/components/context/NetworkContext/NetworkContext';

import { testnetInfo, mainnetInfo } from '../../../configs/network/network.js';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { GET_COLLECTIONS, GET_COLLECTION_STATS, GET_COLLECTION_INFO, GET_COLLECTION_LISTINGS, GET_COLLECTION_LISTINGS_ERC1155 } from "api/graphql/queries/queries.js";

import {
    collectionNameToPath,
    collectionPathToName
} from 'utils/data/collectionData.js'

import useFindCollection from 'hooks/useFindCollection';

import useCart from 'hooks/useCart';

const drawerWidth = 330;
const drawerMinWidth = 38;
const pageMX = 24;
const gridMLeft = 32;
const gridScrollBarWidth = 16.8;

function calculateGridSize(windowWidth, cardSize, ercType = "ERC721", drawerOn = false) {

    // console.log("CardSizes", CardSizes[cardSize]);
    const minMarginX = CardSizes[cardSize][ercType].minMarginX;
    const minMarginY = CardSizes[cardSize][ercType].minMarginY;

    let gridWidth = windowWidth - pageMX - pageMX - gridMLeft - gridScrollBarWidth;

    if (drawerOn) {
        gridWidth -= drawerWidth;
    } else {
        gridWidth -= drawerMinWidth;
    }
    // console.log("gridWidth", gridWidth, cardSize, (CardSizes[cardSize].widthPixel + minMarginX));

    let columnSize = Math.floor(gridWidth / (CardSizes[cardSize][ercType].widthPixel + minMarginX));
    let cardWidthWithMargin = (columnSize !== 0) ? gridWidth / columnSize : CardSizes[cardSize][ercType].widthPixel;
    if (cardWidthWithMargin < CardSizes[cardSize][ercType].widthPixel + minMarginX) {
        cardWidthWithMargin = CardSizes[cardSize][ercType].widthPixel;
        columnSize = 1;
    } else {
        cardWidthWithMargin = CardSizes[cardSize][ercType].widthPixel + minMarginX;
    }
    const cardHeightWithMargin = CardSizes[cardSize][ercType].heightPixel + minMarginY;

    // console.log("cardWidthWithMargin", cardWidthWithMargin, "cardHeightWithMargin", cardHeightWithMargin, "columnSize", columnSize);
    return { gridWidth, columnSize, cardWidthWithMargin, cardHeightWithMargin };
}


function FindCollection({ }) {

    // const networkInfo = useNetwork();
    // console.log("QueriedCollection", network);

    const { collectionsByPath, collectiionsByAddress, getCollectionByName } = useFindCollection();
    const { collectionName } = useParams();

    const collection = getCollectionByName(collectionName);

    if (!collection) {
        return (
            <div>
                <Typography variant="h4" gutterBottom>
                    Collection not found
                </Typography>
            </div>
        );
    }

    return (
        <QueriedCollection collection={collection} />
    )
}

function QueriedCollection({ }) {

    // const networkInfo = useNetwork();
    // console.log("QueriedCollection", network);

    const { collectionsByPath, collectiionsByAddress, getCollectionByName } = useFindCollection();
    const { collectionName } = useParams();

    const collection = getCollectionByName(collectionName);


    // get the properties of the collection
    const { data, loading, fetchMore, error } = useQuery(GET_COLLECTION_INFO, {
        variables: {
            id: collection.address
        }
    })

    const collectionInfo = (data) ? data.collection : {};
    // console.log("info", collectionInfo)

    const attributes = {};
    const attributesList = []

    if (collectionInfo.attributes) {

        return (
            <CollectionsWithAttributes
                collection={collection}
                collectionInfo={collectionInfo}
            // attributes={attributes}
            ></CollectionsWithAttributes>
        )
    }


    console.log("collectionqueriesInfo", collectionInfo);
    if (collectionInfo.standard === "ERC721") {
        // console.log("collectionInfo1 is erc721", collectionInfo, collection)
        return (
            <CollectionsERC721
                collection={collection}
                collectionInfo={collectionInfo}
                attributes={attributes}
                attributesList={attributesList}
            />
        )
    } else {
        return (
            <CollectionsERC1155
                collection={collection}
                collectionInfo={collectionInfo}
                attributes={attributes}
                attributesList={attributesList}
            />
        )
    }
}


const CollectionsWithAttributes = ({ collection, collectionInfo, }) => {
    const attributes = {};
    const attributesList = [];

    // console.log(collectionInfo.attributes)
    for (let i = 0; i < collectionInfo.attributes.length; i++) {
        const attribute = collectionInfo.attributes[i];

        const attributeObj = {
            id: i,
            name: attribute.name,
            percentage: attribute.percentage,
            value: attribute.value,
            // checked: false,
        }

        if (attributes[attribute.name]) {
            attributes[attribute.name]['list'].push(
                attributeObj
            );
        } else {
            attributes[attribute.name] = {
                name: attribute.name,
                list: [attributeObj]
            }
        }
    }

    Object.entries(attributes).forEach(([key, value]) => {
        attributesList.push(value);
    });
    // const [attributesObj, setAttributesObj] = useState(attributes);
    const [attributesListObj, setAttributesListObj] = useState(attributesList);

    // console.log("attributesObj", attributesObj)
    // console.log("attributesListObj", attributesListObj)

    console.log("collectionInfo", collectionInfo, collection)
    if (collectionInfo.standard === "ERC721") {
        // console.log("collectionInfo is erc721", collectionInfo, collection)
        return (
            <CollectionsERC721
                collection={collection}
                collectionInfo={collectionInfo}
                // attributes={attributesObj}
                // setAttributes={setAttributesObj}
                attributesList={attributesListObj}
                setAttributesList={setAttributesListObj}
            />
        )
    } else {
        return (
            <CollectionsERC1155
                collection={collection}
                collectionInfo={collectionInfo}
                // attributes={attributesObj}
                // setAttributes={setAttributesObj}
                attributesList={attributesListObj}
                setAttributesList={setAttributesListObj}
            />
        )
    }

}


function getArrChecked(arr) {
    const arrChecked = [];
    for (let i = 0; i < arr.length; i++) {
        arrChecked.push([]);
        for (let j = 0; j < arr[i].list.length; j++) {
            arrChecked[i].push(false);
        }
    }
    return arrChecked;
}

const CollectionsERC721 = ({
    collection, collectionInfo,
    // attributes, setAttributes,
    attributesList, setAttributesList
}) => {

    const theme = useTheme();

    const { width } = useWindowDimensions();

    const batchSize = 84;

    // for search bar and chips
    const [searchList, setSearchList] = useState([]);

    // properties of the collection
    const [attributesChecked, setAttributesChecked] = useState(getArrChecked(attributesList));

    // for sort by selectoion
    const [sortBy, setSortBy] = useLocalStorage("sortBy", SortSelectOptions[0]);

    // for Card size selection
    const [cardSize, setCardSize] = useLocalStorage('cardSize', SizeSelectOptions[1]);

    // for ERC type selection
    // 0 - ERC721, 1 - ERC1155
    const ercType = "ERC721";
    // const [ercType, setErcType] = useState("ERC721");
    // console.log('ercType', ercType);

    const [numberOfLoaded, setNumberOfLoaded] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(true);

    const attributesChosenList = [];
    for (let i = 0; i < attributesList.length; i++) {
        for (let j = 0; j < attributesList[i].list.length; j++) {
            if (attributesChecked[i][j]) {
                attributesChosenList.push(`${attributesList[i].list[j].name},${attributesList[i].list[j].value}`);
            }
        }
    }
    // console.log("sortBy", sortBy);
    // console.log("ercType", ercType);
    // console.log("collectionInfo", collectionInfo);
    const sortByObj = SortSelectOptionsObj[sortBy];

    const { data, error, loading } = useQuery(GET_COLLECTION_LISTINGS, {
        variables: {
            id: collection.address,
            isERC1155: (ercType === "ERC1155"),
            tokenName: (searchList.length > 0) ? searchList[0] : "",
            skipBy: 0,
            first: batchSize,
            filter: attributesChosenList,
            orderBy: sortByObj.name,
            orderDirection: sortByObj.direction,
        },
        // pollInterval: 4000,
    })


    let listings = [];
    if (data) {
        if (data.collection) {
            if (data.collection.listings) {
                listings = data.collection.listings;
            }
        }
    }

    console.log("reserc721", data, listings);

    const [getMore, lazyRes] = useLazyQuery(GET_COLLECTION_LISTINGS);
    const loadNextPage = () => {
        console.log("loadNextPage");
        const result = getMore({
            variables: {
                id: collection.address,
                isERC1155: (ercType === "ERC1155"),
                tokenName: (searchList.length > 0) ? searchList[0] : "",
                skipBy: numberOfLoaded,
                first: batchSize,
                filter: attributesChosenList,
                orderBy: sortByObj.name,
                orderDirection: sortByObj.direction,
            },
            pollInterval: 4000,
        });
        console.log("result", result);
        setNumberOfLoaded(numberOfLoaded + batchSize);
    }

    const hasNextPageFn = () => {
        return hasNextPage;
    }


    // for drawer
    const [open, setOpen] = useState(false);

    const { gridWidth, columnSize, cardWidthWithMargin, cardHeightWithMargin } = calculateGridSize(width, cardSize, ercType, open);
    // console.log('gridWidth: ', gridWidth, 'columnSize: ', columnSize, "width: ", width, "cardWidthWithMargin: ", cardWidthWithMargin, "cardHeightWithMargin: ", cardHeightWithMargin);


    // const cart = useCart();
    // console.log("cart", cart);

    return (
        <Box id="collections-main-page"
            sx={{
                padding: "0px", mx: `${pageMX}px`,
                display: 'flex', flexDirection: 'column',
            }}
        >

            <TopBox collection={collection} />

            <Divider />

            <Box id="collection-main-box" sx={{ marginTop: "32px", mx: "0px", display: "flex", flexDirection: "row" }}>

                <PropertiesDrawer drawerWidth={drawerWidth} drawerMinWidth={drawerMinWidth}
                    open={open}
                    setOpen={setOpen}
                    collection={collection}
                    collectionInfo={collectionInfo}
                    // attributes={attributes}
                    // setAttributes={setAttributes}
                    attributesList={attributesList}
                    setAttributesList={setAttributesList}
                    attributesChecked={attributesChecked}
                    setAttributesChecked={setAttributesChecked}
                />

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

                        {
                            (listings.length !== 0) ?
                                (

                                    <CardGrid
                                        gridWidth={gridWidth}
                                        columnSize={columnSize}
                                        cardWidthWithMargin={cardWidthWithMargin}
                                        cardHeightWithMargin={cardHeightWithMargin}
                                        cardSize={cardSize}
                                        ercType={ercType}

                                        hasNextPage={hasNextPageFn}
                                        listings={listings}
                                        loadNextPage={loadNextPage}
                                        isNextPageLoading={lazyRes.loading}
                                        lazyRes={lazyRes}
                                        sortBy={sortBy}

                                        viewERC1155={"listings"}
                                    />
                                )
                                :
                                (
                                    <Typography>
                                        No listings found
                                    </Typography>
                                )
                        }
                    </Box>

                    <Box
                        sx={{
                            marginTop: "36px",
                            display: "flex",
                            flexDirection: "row",
                            // backgroundColor: "red"
                        }}
                    >
                        <Box
                            sx={{
                                flexGrow: "0",
                            }}
                        >
                            <Button>
                                Previous
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: "5",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                sx={{

                                }}
                            >
                                <TextField
                                    id="outlined-number"
                                    // label="Number"
                                    type="number"
                                    size='small'
                                    variant="standard"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}

                                    sx={{
                                        minWidth: "60px",
                                        maxWidth: "60px",
                                    }}
                                />

                                <Button>
                                    Go To Page
                                </Button>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: "0",
                            }}
                        >
                            <Button>
                                Next
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

const CollectionsERC1155 = ({
    collection, collectionInfo,
    // attributes, setAttributes,
    attributesList, setAttributesList
}) => {

    const theme = useTheme();

    const { width } = useWindowDimensions();

    const batchSize = 100;

    // for search bar and chips
    const [searchList, setSearchList] = useState([]);

    // properties of the collection
    const [attributesChecked, setAttributesChecked] = useState(getArrChecked(attributesList));

    // for sort by selectoion
    const [sortBy, setSortBy] = useLocalStorage("sortBy", SortSelectOptions[0]);

    // for erc1155 view
    const [viewERC1155, setViewERC1155] = useLocalStorage("viewERC1155", "tokens");

    // for Card size selection
    const [cardSize, setCardSize] = useLocalStorage('cardSize', SizeSelectOptions[1]);

    // for ERC type selection
    // 0 - ERC721, 1 - ERC1155
    const ercType = "ERC1155";
    console.log("ercType1555", SortSelectOptionsERC1155, collectionInfo, collection,);
    // const [ercType, setErcType] = useState("ERC721");
    // console.log('ercType', ercType);

    const [numberOfLoaded, setNumberOfLoaded] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(true);

    const attributesChosenList = [];
    for (let i = 0; i < attributesList.length; i++) {
        for (let j = 0; j < attributesList[i].list.length; j++) {
            if (attributesChecked[i][j]) {
                attributesChosenList.push(`${attributesList[i].list[j].name},${attributesList[i].list[j].value}`);
            }
        }
    }
    // console.log("sortBy", sortBy);
    // console.log("ercType", ercType);
    // console.log("collectionInfo", collectionInfo);
    // console.log("sortby", SortSelectOptionsERC1155[0], SortSelectOptionsERC1155Obj[sortBy]);
    const sortByObj = SortSelectOptionsObj[sortBy];
    // console.log("sortByObj", sortByObj, sortBy);

    const { data, error, loading } = useQuery(GET_COLLECTION_LISTINGS_ERC1155, {
        variables: {
            id: collection.address,
            isERC1155: viewERC1155 === "tokens",
            tokenName: (searchList.length > 0) ? searchList[0] : "",
            skipBy: 0,
            first: batchSize,
            filter: attributesChosenList,
            orderBy: sortByObj.name,
            orderDirection: sortByObj.direction,
        },
        // pollInterval: 4000,
    })

    // console.log("data", data);
    let listings = [];
    if (data) {
        if (data.collection) {

            if (viewERC1155 == "tokens") {
                listings = data.collection.tokens;
                listings = listings.filter((item) => {
                    return (item.listings && item.listings.length > 0)
                })
            } else {
                listings = data.collection.listings;
                listings = listings.filter((item) => {
                    return (item.listings && item.listings.length > 0)
                })
            }
        }
    }

    console.log("reserc1155", data, listings);

    const [getMore, lazyRes] = useLazyQuery(GET_COLLECTION_LISTINGS_ERC1155);
    const loadNextPage = () => {
        console.log("loadNextPage");
        const result = getMore({
            variables: {
                id: collection.address,
                isERC1155: (ercType === "ERC1155"),
                tokenName: (searchList.length > 0) ? searchList[0] : "",
                skipBy: numberOfLoaded,
                first: batchSize,
                filter: attributesChosenList,
                orderBy: sortByObj.name,
                orderDirection: sortByObj.direction,
            },
            pollInterval: 4000,
        });
        console.log("result", result);
        setNumberOfLoaded(numberOfLoaded + batchSize);
    }

    const hasNextPageFn = () => {
        return hasNextPage;
    }


    // for drawer
    const [open, setOpen] = useState(false);

    const { gridWidth, columnSize, cardWidthWithMargin, cardHeightWithMargin } = calculateGridSize(width, cardSize, ercType, open);
    // console.log('gridWidth: ', gridWidth, 'columnSize: ', columnSize, "width: ", width, "cardWidthWithMargin: ", cardWidthWithMargin, "cardHeightWithMargin: ", cardHeightWithMargin);


    return (
        <Box id="collections-main-page"
            sx={{
                padding: "0px", mx: `${pageMX}px`,
                display: 'flex', flexDirection: 'column',
            }}
        >

            <TopBox collection={collection} />

            <Divider />

            <Box id="collection-main-box" sx={{ marginTop: "32px", mx: "0px", display: "flex", flexDirection: "row" }}>

                <PropertiesDrawer drawerWidth={drawerWidth} drawerMinWidth={drawerMinWidth}
                    open={open}
                    setOpen={setOpen}
                    collection={collection}
                    collectionInfo={collectionInfo}
                    // attributes={attributes}
                    // setAttributes={setAttributes}
                    attributesList={attributesList}
                    setAttributesList={setAttributesList}
                    attributesChecked={attributesChecked}
                    setAttributesChecked={setAttributesChecked}
                />

                <Box id="collection-main-right-box" sx={{ flexGrow: "1", marginLeft: `${gridMLeft}px`, }}>
                    <Box id="collection-grid-top-box" sx={{ display: "flex", flexDirection: "row", alignContent: "stretch", flexWrap: "wrap", gap: "24px" }}>
                        <Box id="collection-search-box" sx={{ minWidth: "200px", flexGrow: "10" }}>
                            <SearchBar searchList={searchList} setSearchList={setSearchList} />
                        </Box>

                        <Box id="collection-sort-box" sx={{ width: "220px", minWidth: "100px", flexGrow: "3" }}>
                            <SortSelect sortBy={sortBy} setSortBy={setSortBy} ercType={ercType} />
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

                        {
                            (listings.length > 0) ?
                                (

                                    <CardGrid
                                        gridWidth={gridWidth}
                                        columnSize={columnSize}
                                        cardWidthWithMargin={cardWidthWithMargin}
                                        cardHeightWithMargin={cardHeightWithMargin}
                                        cardSize={cardSize}
                                        ercType={ercType}

                                        hasNextPage={hasNextPageFn}
                                        listings={listings}
                                        loadNextPage={loadNextPage}
                                        isNextPageLoading={lazyRes.loading}
                                        lazyRes={lazyRes}
                                        sortBy={sortBy}

                                        viewERC1155={viewERC1155}
                                    />
                                )
                                :
                                (
                                    <Typography>
                                        No listings found
                                    </Typography>
                                )
                        }
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}


export default FindCollection;