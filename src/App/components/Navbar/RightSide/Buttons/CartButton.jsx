
import { useContext } from 'react';

import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import WalletContext from '../../../context/WalletContext/WalletContext';


const CartButton = ({ }) => {
    const { signer, } = useContext(WalletContext);


    return (
        <IconButton
            disabled={(signer == null)}
            color="secondary"
            aria-label="shopping cart checkout" sx={{ p: "12px", mx: "5px" }}>
            <ShoppingCartIcon />
        </IconButton>
    )
}

export default CartButton;