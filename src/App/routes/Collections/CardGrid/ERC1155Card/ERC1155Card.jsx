import Box from '@mui/material/Box';

import MediumCard from './Cards/MediumCard';
import SmallCard from './Cards/SmallCard';

import { SizeSelectOptions, CardSizes } from '../../SizeSelect/SizeSelectOptions';

const ERC1155Card = ({ cardSize, item, collection }) => {

    // console.log("collection2: ", collection);
    if (cardSize === "SM") {
        return (
            <Box>
                <SmallCard item={item} collection={collection} />
            </Box>
        )
    } else if (cardSize === "MD") {
        return (
            <Box>
                <MediumCard item={item} collection={collection} />
            </Box>
        )
    } else if (cardSize === "LG") {
        return (
            <Box>
                <MediumCard item={item} collection={collection} />
            </Box>
        )
    }
    return (
        <Box>
            <MediumCard item={item} collection={collection} />
        </Box>
    )
}

export default ERC1155Card;