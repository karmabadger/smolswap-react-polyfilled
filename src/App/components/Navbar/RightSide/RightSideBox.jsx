import { useContext } from 'react';

import Box from '@mui/material/Box';

import ConnectButton from './Buttons/ConnectButton';
import CheckoutButton from './Buttons/CheckoutButton';
import CartButton from './Buttons/CartButton';
import SettingsButton from './Buttons/SettingsButton';

import WalletContext from '../../context/WalletContext/WalletContext';



const ButtonSection = ({
    matchesDownMD,
    openSettingsModal,
    setOpenSettingsModal,
    openQuickCheckoutModal,
    setOpenQuickCheckoutModal,
}) => {
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
            </Box>)
        } else {
            return (<Box sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                // bgcolor: 'background.paper',
                alignItems: 'center',
                borderRadius: 1,
            }}>
                <CartButton
                    openQuickCheckoutModal={openQuickCheckoutModal}
                    setOpenQuickCheckoutModal={setOpenQuickCheckoutModal}
                />
                <CheckoutButton />
                <SettingsButton
                    openSettingsModal={openSettingsModal}
                    setOpenSettingsModal={setOpenSettingsModal}
                />
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
            <CartButton
                openQuickCheckoutModal={openQuickCheckoutModal}
                setOpenQuickCheckoutModal={setOpenQuickCheckoutModal}
            />
            <CheckoutButton />
            <SettingsButton
                openSettingsModal={openSettingsModal}
                setOpenSettingsModal={setOpenSettingsModal}
            />
        </Box>)
    }
}

const RightSideBox = ({
    matchesDownMD,
    openSettingsModal,
    setOpenSettingsModal,
    openQuickCheckoutModal,
    setOpenQuickCheckoutModal,
}) => {

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
                <ButtonSection matchesDownMD={matchesDownMD}
                    openSettingsModal={openSettingsModal}
                    setOpenSettingsModal={setOpenSettingsModal}

                    openQuickCheckoutModal={openQuickCheckoutModal}
                    setOpenQuickCheckoutModal={setOpenQuickCheckoutModal}
                />
            </Box>
        </Box>
    )
}

export default RightSideBox;