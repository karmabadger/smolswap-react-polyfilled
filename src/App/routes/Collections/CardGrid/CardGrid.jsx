import { useState, useEffect, useRef } from 'react';

import { FixedSizeGrid as Grid } from 'react-window';

import InfiniteLoader from "react-window-infinite-loader";

import Box from '@mui/material/Box';


import ERC721Card from './ERC721Card/ERC721Card';
import ERC1155Card from './ERC1155Card/ERC1155Card';

const CardGrid = ({
    gridWidth,
    columnSize,
    cardWidthWithMargin,
    cardHeightWithMargin,
    cardSize,
    ercType,

    hasNextPage,
    listings,
    isNextPageLoading,
    loadNextPage,
    sortBy,
    lazyRes,
}) => {
    // const [count, setCount] = useState(20);

    // We create a reference for the InfiniteLoader
    const infiniteLoaderRef = useRef(null);
    const hasMountedRef = useRef(false);

    const count = listings.length;

    const rowCount = (columnSize !== 0) ? Math.ceil(count / columnSize) : 1;

    // Each time the sort prop changed we called the method resetloadMoreItemsCache to clear the cache
    useEffect(() => {
        // We only need to reset cached items when "sortOrder" changes.
        // This effect will run on mount too; there's no need to reset in that case.
        if (hasMountedRef.current) {
            if (infiniteLoaderRef.current) {
                infiniteLoaderRef.current.resetloadMoreItemsCache();
            }
        }
        hasMountedRef.current = true;
    }, [sortBy]);


    const itemCount = hasNextPage ? count + 1 : count;

    const loadMoreItems = isNextPageLoading ? () => { } : loadNextPage;

    const isItemLoaded = (columnIndex, rowIndex) => {
        const index = rowIndex * columnSize + columnIndex;
        return (!hasNextPage || index < count)
    }

    const getItem = (columnIndex, rowIndex) => {
        const index = rowIndex * columnSize + columnIndex;
        if (index >= count) {
            return {};
        }
        return listings[index];
    };

    const Cell = ({ columnIndex, rowIndex, style }) => {
        if (!isItemLoaded(index)) {
            const content = "Loading...";
            return <div style={style}>{content}</div>;
        }

        const item = getItem(columnIndex, rowIndex);
        return (
            <div style={style}>
                {
                    (ercType === "ERC721") ?
                        <ERC721Card cardSize={cardSize} item={item} />
                        :
                        <ERC1155Card cardSize={cardSize} item={item} />
                }
            </div>
        );
    }



    return (
        <Box sx={{ width: "100%" }}>
            <InfiniteLoader
                ref={infiniteLoaderRef}
                isItemLoaded={isItemLoaded}
                itemCount={itemCount}
                loadMoreItems={loadMoreItems}
            >
                {({ onItemsRendered, ref }) => (
                    <Grid
                        style={{ width: '100%' }}
                        onItemsRendered={onItemsRendered}
                        ref={ref}

                        itemCount={count}
                        columnCount={columnSize}
                        columnWidth={cardWidthWithMargin}
                        height={1350}
                        rowCount={rowCount}
                        rowHeight={cardHeightWithMargin}
                        width={gridWidth}
                    >
                        {Cell}
                    </Grid>
                )}
            </InfiniteLoader>
        </Box>
    );
}

export default CardGrid;