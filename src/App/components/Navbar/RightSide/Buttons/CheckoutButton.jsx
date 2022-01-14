import { useContext } from 'react';

import IconButton from "@mui/material/IconButton";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

import WalletContext from '../../../context/WalletContext/WalletContext';

const CheckoutButton = ({ connected }) => {
    const { web3Modal, signer, setSigner } = useContext(WalletContext);

    return (
        <IconButton disabled={(signer == null)}
            color="secondary"
            aria-label="shopping cart checkout" sx={{ p: "12px", mx: "5px" }}>
            <ShoppingCartCheckoutIcon />
        </IconButton>
    )
}

export default CheckoutButton;