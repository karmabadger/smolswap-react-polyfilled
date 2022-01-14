import { useContext } from 'react';

import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

import WalletContext from '../../../context/WalletContext/WalletContext';

const CheckoutButton = ({ }) => {
    const navigate = useNavigate();

    const { signer, } = useContext(WalletContext);

    const handleClick = () => {
        navigate("/checkout");
    }

    return (
        <IconButton
            disabled={(signer == null)}
            color="secondary"
            aria-label="shopping cart checkout"
            sx={{ p: "12px", mx: "5px" }}
            onClick={handleClick}>
            <ShoppingCartCheckoutIcon />
        </IconButton>
    )
}

export default CheckoutButton;