const testnetInfo = {
    type: 'testnet',
    chainId: '0x4',
    chainIdInt: 4,
    name: 'rinkeby',

    chainName: 'Rinkeby Testnet',
    nativeCurrency: {
        name: 'Rinkeby ETH',
        symbol: 'RETH', // 2-6 characters long
        decimals: 18
    },
    blockExplorerUrls: ['https://rinkeby.etherscan.io'],
    rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161', 'https://rinkeby-light.eth.linkpool.io/'],
    websocketRpcUrls: ['wss://rinkeby-light.eth.linkpool.io/'],

    baseRoute: '/testnet/',
    treasureMarketplaceAddress: '0x7A0d90242A0b87BC4DB8850476cFDaE778C2c389',
    smolswapAddress: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    magicAddress: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    theGraph: {
        url: 'https://api.thegraph.com/subgraphs/name/wyze/treasure-marketplace-dev',
    },
    etherscan: {
        url: 'https://rinkeby.etherscan.io',
    },
}

const mainnetInfo = {
    type: 'mainnet',
    chainId: '0xa4b1',
    chainIdInt: 42161,
    name: 'arb1',

    chainName: 'Arbitrum One',
    nativeCurrency: {
        name: 'AETH',
        symbol: 'AETH', // 2-6 characters long
        decimals: 18
    },
    blockExplorerUrls: ['https://rinkeby.etherscan.io', "https://arbiscan.io/"],
    rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161', 'https://arb1.arbitrum.io/rpc'],
    websocketRpcUrls: ['wss://rinkeby-light.eth.linkpool.io/'],

    baseRoute: '/',
    treasureMarketplaceAddress: '0x2e3b85f85628301a0bce300dee3a6b04195a15ee',
    smolswapAddress: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    magicAddress: '0x539bdE0d7Dbd336b79148AA742883198BBF60342',
    theGraph: {
        url: 'https://api.thegraph.com/subgraphs/name/wyze/treasure-marketplace',
    },
    etherscan: {
        url: 'https://etherscan.io',
    },
}

export { testnetInfo, mainnetInfo }