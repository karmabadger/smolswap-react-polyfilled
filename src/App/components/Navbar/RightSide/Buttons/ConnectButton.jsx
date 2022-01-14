import { useContext } from 'react';

import Button from '@mui/material/Button';

import { ethers } from "ethers";

import WalletContext from '../../../context/WalletContext/WalletContext';

const ConnectButton = ({ connected }) => {
    const { web3Modal, signer, setSigner } = useContext(WalletContext);

    const handleConnect = async () => {
        const instance = await web3Modal.connect();

        const provider = new ethers.providers.Web3Provider(instance);
        const newSigner = provider.getSigner();

        setSigner(newSigner);
        console.log(newSigner, await newSigner.getAddress());
    }

    return (
        <Button color="secondary"
            variant={(signer == null) ? "contained" : "text"}
            onClick={handleConnect}
            sx={{ px: "8px", py: "11px", width: "113px", height: "42px", mx: "5px", my: "0px" }}
        >
            Connect
        </Button >
    )
}

export default ConnectButton;