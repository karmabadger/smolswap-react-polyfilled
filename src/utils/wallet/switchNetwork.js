
import { mainnetInfo, testnetInfo } from 'src/configs/network/network';


// chainId: hex string
async function switchNetwork(chainId) {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: chainId }],
        });
    } catch (e) {

        if (chainId === mainnetInfo.chainId || chainId === mainnetInfo.chainIdInt) {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainId: chainId,
                        chainName: mainnetInfo.chainName,
                        nativeCurrency: mainnetInfo.nativeCurrency,
                        blockExplorerUrls: mainnetInfo.blockExplorerUrls,
                        rpcUrls: mainnetInfo.rpcUrls,
                    },
                ],
            });
        } else if (chainId === testnetInfo.chainId || chainId === testnetInfo.chainIdInt) {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainId: chainId,
                        chainName: testnetInfo.chainName,
                        nativeCurrency: testnetInfo.nativeCurrency,
                        blockExplorerUrls: testnetInfo.blockExplorerUrls,
                        rpcUrls: testnetInfo.rpcUrls,
                    },
                ],
            });
        }
    }
}


export default switchNetwork;