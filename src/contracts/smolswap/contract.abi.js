
const abi = [
    {
        "inputs": [
            {
                "internalType": "contract ITreasureMarketplace",
                "name": "_treasureMarketplace",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_defaultPaymentToken",
                "type": "address"
            },
            {
                "internalType": "contract IUniswapV2Router02[]",
                "name": "_swapRouters",
                "type": "address[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_nftAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_seller",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_quantity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "_errorReason",
                "type": "bytes"
            }
        ],
        "name": "CaughtFailureBuyItem",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_nftAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_seller",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_quantity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            }
        ],
        "name": "SuccessBuyItem",
        "type": "event"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [],
        "name": "MAX_UINT256",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IUniswapV2Router02",
                "name": "_router",
                "type": "address"
            }
        ],
        "name": "addSwapRouter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "approveDefaultPaymentTokensToTreasureMarketplace",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_contract",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "approveERC20TokenToContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_outputPaymentTokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_routerId",
                "type": "uint256"
            }
        ],
        "name": "calculateMinETHInputForOutputPaymentTokens",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_inputTokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_outputPaymentTokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_routerId",
                "type": "uint256"
            }
        ],
        "name": "calculateMinTokensInputForOutputPaymentTokens",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "defaultPaymentToken",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSwapRouterCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketplace",
        "outputs": [
            {
                "internalType": "contract ITreasureMarketplace",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "assetAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxPricePerItem",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct TreasureMarketplaceMultiBuyer.BuyOrder[]",
                "name": "_buyOrders",
                "type": "tuple[]"
            },
            {
                "internalType": "uint16",
                "name": "_inputSettingsBitFlag",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "_maxTotalPrice",
                "type": "uint256"
            }
        ],
        "name": "multiBuyUsingPaymentToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155BatchReceived",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC721Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_defaultPaymentToken",
                "type": "address"
            }
        ],
        "name": "setDefaultPaymentToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract ITreasureMarketplace",
                "name": "_treasureMarketplace",
                "type": "address"
            }
        ],
        "name": "setMarketplaceContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "routerId",
                "type": "uint256"
            },
            {
                "internalType": "contract IUniswapV2Router02",
                "name": "_router",
                "type": "address"
            }
        ],
        "name": "setSwapRouter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "assetAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxPricePerItem",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct TreasureMarketplaceMultiBuyer.BuyOrder[]",
                "name": "_buyOrders",
                "type": "tuple[]"
            },
            {
                "internalType": "uint16",
                "name": "_inputSettingsBitFlag",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "_maxTotalPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_routerId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_deadline",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_refundInETH",
                "type": "bool"
            }
        ],
        "name": "swapETHForExactAssets",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "swapRouters",
        "outputs": [
            {
                "internalType": "contract IUniswapV2Router02",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "assetAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxPricePerItem",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct TreasureMarketplaceMultiBuyer.BuyOrder[]",
                "name": "_buyOrders",
                "type": "tuple[]"
            },
            {
                "internalType": "uint16",
                "name": "_inputSettingsBitFlag",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "_maxTotalPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_amountInMax",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_inputERC20",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_routerId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_deadline",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_refundInInputTokens",
                "type": "bool"
            }
        ],
        "name": "swapTokensForExactAssets",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "assetAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxPricePerItem",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct TreasureMarketplaceMultiBuyer.BuyOrder[]",
                "name": "_buyOrders",
                "type": "tuple[]"
            },
            {
                "internalType": "uint16",
                "name": "_inputSettingsBitFlag",
                "type": "uint16"
            },
            {
                "internalType": "uint256[]",
                "name": "_maxSuccessAndFailCounts",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256",
                "name": "_amountOutMin",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_routerId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_deadline",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_refundInETH",
                "type": "bool"
            }
        ],
        "name": "sweepUsingExactETHForAssets",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "assetAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxPricePerItem",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct TreasureMarketplaceMultiBuyer.BuyOrder[]",
                "name": "_buyOrders",
                "type": "tuple[]"
            },
            {
                "internalType": "uint16",
                "name": "_inputSettingsBitFlag",
                "type": "uint16"
            },
            {
                "internalType": "uint256[]",
                "name": "_maxSuccessAndFailCounts",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256",
                "name": "_amountIn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_amountOutMin",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_inputERC20",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_routerId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_deadline",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_refundInInputTokens",
                "type": "bool"
            }
        ],
        "name": "sweepUsingExactTokensForAssets",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "assetAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxPricePerItem",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct TreasureMarketplaceMultiBuyer.BuyOrder[]",
                "name": "_buyOrders",
                "type": "tuple[]"
            },
            {
                "internalType": "uint16",
                "name": "_inputSettingsBitFlag",
                "type": "uint16"
            },
            {
                "internalType": "uint256[]",
                "name": "_maxSuccessAndFailCounts",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256",
                "name": "_maxTotalPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_minSpendAmount",
                "type": "uint256"
            }
        ],
        "name": "sweepUsingPaymentToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC1155",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "_tokenIds",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_amounts",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "transferERC1155To",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "transferERC20TokenTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC721",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferERC721To",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "transferETHTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]

export default abi;