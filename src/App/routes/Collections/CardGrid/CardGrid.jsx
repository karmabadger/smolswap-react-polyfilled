import { useState } from 'react';

import { FixedSizeGrid as Grid } from 'react-window';

import Box from '@mui/material/Box';


import ERC721Card from './ERC721Card/ERC721Card';
import ERC1155Card from './ERC1155Card/ERC1155Card';

const CardGrid = ({ gridWidth, columnSize, cardWidthWithMargin, cardHeightWithMargin, cardSize, ercType }) => {
    const [count, setCount] = useState(20);

    const rowCount = (columnSize != 0) ? Math.ceil(count / columnSize) : 1;

    const Cell = ({ columnIndex, rowIndex, style }) => {
        return (
            <div style={style}>
                {
                    (ercType === "ERC721") ?
                        <ERC721Card cardSize={cardSize} />
                        :
                        <ERC1155Card cardSize={cardSize} />
                }
            </div>
        );
    }
    return (
        <Box sx={{ width: "100%" }}>
            <Grid
                style={{ width: '100%' }}
                // onItemsRendered={this.onItemsRendered(onItemsRendered)}
                columnCount={columnSize}
                columnWidth={cardWidthWithMargin}
                height={1350}
                rowCount={rowCount}
                rowHeight={cardHeightWithMargin}
                width={gridWidth}
            >
                {Cell}
            </Grid>
        </Box>
    );
}

export default CardGrid;