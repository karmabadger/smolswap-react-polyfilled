import { useContext } from 'react';

import Box from '@mui/material/Box';

import ConnectButton from './Buttons/ConnectButton';
import CheckoutButton from './Buttons/CheckoutButton';
import CartButton from './Buttons/CartButton';
import SettingsButton from './Buttons/SettingsButton';

import WalletContext from '../../context/WalletContext/WalletContext';



const ButtonSection = ({ matchesDownMD, }) => {
    const { signer } = useContext(WalletContext);
    if (matchesDownMD) {
        if (signer == null) {
            return (<Box sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                // bgcolor: 'background.paper',
                alignItems: 'center',
                borderRadius: 1,
            }}>
                <ConnectButton />
                <SettingsButton />
            </Box>)
        } else {
            return (<Box sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                // bgcolor: 'background.paper',
                alignItems: 'center',
                borderRadius: 1,
            }}>
                <CartButton />
                <CheckoutButton />
                <SettingsButton />
            </Box>
            )
        }
    } else {
        return (<Box sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            // bgcolor: 'background.paper',
            alignItems: 'center',
            borderRadius: 1,
        }}>
            <ConnectButton />
            <CartButton />
            <CheckoutButton />
            <SettingsButton />
        </Box>)
    }
}

const RightSideBox = ({ matchesDownMD, }) => {

    return (
        <Box dir="rtl" sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            // bgcolor: 'background.paper',
            alignItems: 'center',
            borderRadius: 1,
        }}>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                // bgcolor: 'background.paper',
                alignItems: 'center',
                borderRadius: 1,
            }}>
                <ButtonSection matchesDownMD={matchesDownMD} />
            </Box>
        </Box>
    )
}

export default RightSideBox;