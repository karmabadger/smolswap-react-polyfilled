const testnetInfo = {
    type: 'testnet',
    chainId: '0x4',
    name: 'rinkeby',
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
    name: 'arb1',
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