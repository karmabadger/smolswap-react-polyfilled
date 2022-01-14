

import Box from '@mui/material/Box';

import ConnectButton from './Buttons/ConnectButton';
import CheckoutButton from './Buttons/CheckoutButton';
import CartButton from './Buttons/CartButton';

const RightSideBox = () => {
    return (
        <Box dir="rtl" sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            // bgcolor: 'background.paper',
            alignItems: 'center',
            borderRadius: 1,
        }}>
            <ConnectButton />
            <CartButton />
            <CheckoutButton />
        </Box>
    )
}

export default RightSideBox;