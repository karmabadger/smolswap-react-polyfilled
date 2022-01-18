const testnetInfo = {
    type: 'testnet',
    chainId: '0x4',
    name: 'rinkeby',
    baseRoute: '/testnet',
    theGraph: {
        url: 'https://api.thegraph.com/subgraphs/name/wyze/treasure-marketplace',
    }
}

const mainnetInfo = {
    type: 'mainnet',
    chainId: '0x1',
    name: 'arb1',
    baseRoute: '/',
    theGraph: {
        url: 'https://api.thegraph.com/subgraphs/name/wyze/treasure-marketplace',
    }
}

export { testnetInfo, mainnetInfo }