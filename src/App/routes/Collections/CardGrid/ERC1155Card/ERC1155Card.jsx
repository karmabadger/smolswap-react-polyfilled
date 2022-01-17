import Box from '@mui/material/Box';

import MediumCard from './Cards/MediumCard';
import SmallCard from './Cards/SmallCard';

import { SizeSelectOptions, CardSizes } from '../../SizeSelect/SizeSelectOptions';

const ERC1155Card = ({ cardSize }) => {
    if (cardSize === "SM") {
        return (
            <Box>
                <SmallCard />
            </Box>
        )
    } else if (cardSize === "MD") {
        return (
            <Box>
                <MediumCard />
            </Box>
        )
    } else if (cardSize === "LG") {
        return (
            <Box>
                <MediumCard />
            </Box>
        )
    }
    return (
        <Box>
            <MediumCard />
        </Box>
    )
}

export default ERC1155Card;