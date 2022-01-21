import { useContext } from 'react';

import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import SettingsIcon from '@mui/icons-material/Settings';

import WalletContext from '../../../context/WalletContext/WalletContext';

const SettingsButton = ({ }) => {
    // const navigate = useNavigate();

    const { signer, } = useContext(WalletContext);

    // const handleClick = () => {
    //     navigate("/checkout");
    // }

    return (
        <IconButton
            // disabled={(signer == null)}
            color="secondary"
            aria-label="shopping cart checkout"
            sx={{ p: "12px", mx: "5px" }}
        // onClick={handleClick}
        >
            <SettingsIcon />
        </IconButton>
    )
}

export default SettingsButton;