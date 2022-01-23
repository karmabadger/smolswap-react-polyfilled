import Box from '@mui/material/Box';

import MediumCard from './Cards/MediumCard';
import SmallCard from './Cards/SmallCard';

import { SizeSelectOptions, CardSizes } from '../../SizeSelect/SizeSelectOptions';

import useCart from "hooks/useCart";
import { BigNumber } from 'ethers';
import { strWeiToETH } from 'utils/erc/erc20utils.js';
import useAlertContext from "hooks/useAlertContext";
import getTreasureMarketplaceContract from "contracts/treasure-marketplace/contract";
import getSmolswapContract from 'contracts/smolswap/contract.js';
import getERC20Contract from 'contracts/erc20/contract.js';
import useNetwork from 'hooks/useNetwork.jsx';
import useWallet from 'hooks/useWallet.jsx';

const ERC721Card = ({
    cardSize,
    item,
    collection
}) => {

    const { signer } = useWallet();
    const networkInfo = useNetwork();
    const cart = useCart();
    const alertContext = useAlertContext();

    const handleBuyItem = async () => {
        if (signer) {
            console.log("signer", signer.provider, signer.provider.address)
            const signerNetwork = await signer.provider.getNetwork();
            if (signerNetwork.chainId != networkInfo.chainId || signerNetwork.chainId != Number(networkInfo.chainId)) {
                const message = `You are on the ${signerNetwork.name} network. Please Switch to the ${networkInfo.name} network.`;
                alertContext.addTimedAlert("outlined", message, "error", 10000, true);
                console.log(message, signerNetwork.chainId, networkInfo.chainId);
                return;
            } else {

                const signerAddress = await signer.getAddress();
                const MagicContract = getERC20Contract(signer, networkInfo.magicAddress);
                const treasureMarketplace = getTreasureMarketplaceContract(signer, networkInfo.treasureMarketplaceAddress);
                const smolswap = getSmolswapContract(signer, networkInfo.smolswapAddress);

                // choose the marketplace to use based on user's default settings
                let marketplace = treasureMarketplace;

                // check if user has enough balance
                const balance = await MagicContract.balanceOf(signerAddress);
                const balanceStrETH = strWeiToETH(balance.toString());

                const pricePerItem = BigNumber.from(item.pricePerItem);
                const quantity = BigNumber.from(item.quantity);

                const price = pricePerItem.mul(quantity);
                const priceStrETH = strWeiToETH(price.toString());

                if (balance.lt(price)) {
                    console.log("not enough balance");
                    const message = "Not enough balance: " + balanceStrETH + " < " + priceStrETH;
                    alertContext.addTimedAlert("outlined", message, "error", 10000, true);
                    // alertContext.addAlert("error", "You don't have enough tokens to purchase this item");
                    return;

                } else {
                    // check if user has approved the contract
                    const approved = await MagicContract.allowance(signer.address, marketplace.address);

                    // if not then approve it
                    if (approved.lt(item.price)) {
                        // check default settings to see if user wants infinite approvals
                        const message = "Approving " + priceStrETH + " to " + marketplace.address;
                        alertContext.addTimedAlert("outlined", message, "error", 5000, true);
                        await MagicContract.approve(marketplace.address, price);
                    }

                    // console.log(treasureMarketplace, signer, networkInfo, collection, item);

                    const tx = await treasureMarketplace.buyItem(collection.address, BigNumber.from(item.token.tokenId), item.user.id, BigNumber.from(item.quantity), {});

                    console.log("tx", tx);
                    // alertContext.showAlert(`Transaction ${tx.hash} submitted!`);
                }
            }
        }
    }

    if (cardSize === "SM") {
        return (
            <Box>
                <SmallCard item={item} collection={collection}
                    handleBuyItem={handleBuyItem}
                />
            </Box>
        )
    } else if (cardSize === "MD") {
        return (
            <Box>
                <MediumCard item={item} collection={collection}
                    handleBuyItem={handleBuyItem}
                />
            </Box>
        )
    }
    return (
        <Box>
            <MediumCard item={item} collection={collection}
                handleBuyItem={handleBuyItem}
            />
        </Box>
    )
}

export default ERC721Card;