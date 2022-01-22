
import { useContext } from 'react';

import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import WalletContext from '../../../context/WalletContext/WalletContext';


const CartButton = ({
    openQuickCheckoutModal,
    setOpenQuickCheckoutModal,
}) => {
    const { signer, } = useContext(WalletContext);

    const handleClick = () => {
        setOpenQuickCheckoutModal(true);
    }

    return (
        <IconButton
            disabled={(signer == null)}
            color="secondary"
            aria-label="shopping cart checkout" sx={{ p: "12px", mx: "5px" }}
            onClick={handleClick}
        >
            <ShoppingCartIcon />
        </IconButton>
    )
}

export default CartButton;