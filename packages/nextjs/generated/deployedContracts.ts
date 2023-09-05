const contracts = {
  5: [
    {
      chainId: "5",
      name: "goerli",
      contracts: {
        "CustomERC1155 - Actual": {
          address: "0x1A2E180Cd8329b0E0FCe1cB9a5E8fa7ED2DeC742",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contractOwner",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "initContract",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "initData",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Diamond.Initialization[]",
                  name: "_initializations",
                  type: "tuple[]",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              stateMutability: "payable",
              type: "fallback",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "CustomERC1155_CreatingTokenButNotOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_HasAlreadyMinted",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_TokenDoesNotExist",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_UriDoesNotEndWithDotGLB",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ArrayLengthMismatch",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BalanceQueryZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BurnExceedsBalance",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BurnFromZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ERC1155ReceiverNotImplemented",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ERC1155ReceiverRejected",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__MintToZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__NotOwnerOrApproved",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__SelfApproval",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__TransferExceedsBalance",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__TransferToZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC165Base__InvalidInterfaceId",
              type: "error",
            },
            {
              inputs: [],
              name: "EnumerableSet__IndexOutOfBounds",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "CreateToken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "minter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "MintToken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "TransferBatch",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "TransferSingle",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "value",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "URI",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "accountsByToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "accounts",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
              ],
              name: "balanceOfBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_uri",
                  type: "string",
                },
              ],
              name: "createTokenType",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeBatchTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "status",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "tokensByAccount",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "totalHolders",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalTokenTypeCount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "uri",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              anonymous: false,
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  indexed: false,
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_init",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_calldata",
                  type: "bytes",
                },
              ],
              name: "DiamondCut",
              type: "event",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "_init",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "_calldata",
                  type: "bytes",
                },
              ],
              name: "diamondCut",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "owner_",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "_functionSelector",
                  type: "bytes4",
                },
              ],
              name: "facetAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "facetAddress_",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "facetAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "facetAddresses_",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_facet",
                  type: "address",
                },
              ],
              name: "facetFunctionSelectors",
              outputs: [
                {
                  internalType: "bytes4[]",
                  name: "facetFunctionSelectors_",
                  type: "bytes4[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "facets",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondLoupe.Facet[]",
                  name: "facets_",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "_interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "CustomERC1155 - Actual_DiamondProxy": {
          address: "0x1A2E180Cd8329b0E0FCe1cB9a5E8fa7ED2DeC742",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contractOwner",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "initContract",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "initData",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Diamond.Initialization[]",
                  name: "_initializations",
                  type: "tuple[]",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              stateMutability: "payable",
              type: "fallback",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "CustomERC1155_CreatingTokenButNotOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_HasAlreadyMinted",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_TokenDoesNotExist",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_UriDoesNotEndWithDotGLB",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ArrayLengthMismatch",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BalanceQueryZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BurnExceedsBalance",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BurnFromZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ERC1155ReceiverNotImplemented",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ERC1155ReceiverRejected",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__MintToZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__NotOwnerOrApproved",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__SelfApproval",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__TransferExceedsBalance",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__TransferToZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC165Base__InvalidInterfaceId",
              type: "error",
            },
            {
              inputs: [],
              name: "EnumerableSet__IndexOutOfBounds",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "CreateToken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "minter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "MintToken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "TransferBatch",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "TransferSingle",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "value",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "URI",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "accountsByToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "accounts",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
              ],
              name: "balanceOfBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_uri",
                  type: "string",
                },
              ],
              name: "createTokenType",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeBatchTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "status",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "tokensByAccount",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "totalHolders",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalTokenTypeCount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "uri",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              anonymous: false,
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  indexed: false,
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_init",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_calldata",
                  type: "bytes",
                },
              ],
              name: "DiamondCut",
              type: "event",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "_init",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "_calldata",
                  type: "bytes",
                },
              ],
              name: "diamondCut",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "owner_",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "_functionSelector",
                  type: "bytes4",
                },
              ],
              name: "facetAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "facetAddress_",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "facetAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "facetAddresses_",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_facet",
                  type: "address",
                },
              ],
              name: "facetFunctionSelectors",
              outputs: [
                {
                  internalType: "bytes4[]",
                  name: "facetFunctionSelectors_",
                  type: "bytes4[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "facets",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondLoupe.Facet[]",
                  name: "facets_",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "_interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        CustomERC1155: {
          address: "0x78B5200D2Fc908E41E25AbD7698F6BCaf21AeF24",
          abi: [
            {
              inputs: [],
              name: "CustomERC1155_CreatingTokenButNotOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_HasAlreadyMinted",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_TokenDoesNotExist",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_UriDoesNotEndWithDotGLB",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ArrayLengthMismatch",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BalanceQueryZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BurnExceedsBalance",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BurnFromZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ERC1155ReceiverNotImplemented",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ERC1155ReceiverRejected",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__MintToZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__NotOwnerOrApproved",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__SelfApproval",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__TransferExceedsBalance",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__TransferToZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC165Base__InvalidInterfaceId",
              type: "error",
            },
            {
              inputs: [],
              name: "EnumerableSet__IndexOutOfBounds",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "CreateToken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "minter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "MintToken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "TransferBatch",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "TransferSingle",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "value",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "URI",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "accountsByToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "accounts",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
              ],
              name: "balanceOfBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_uri",
                  type: "string",
                },
              ],
              name: "createTokenType",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeBatchTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "status",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "tokensByAccount",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "totalHolders",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalTokenTypeCount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "uri",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        DiamondInit: {
          address: "0x4d1E6B6C684E74a8129A03cDfAb041EfA0708F8f",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        _DefaultDiamondCutFacet: {
          address: "0x429dbdE7913c0Ed51E4B21163760B92eE66Ff5f5",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  indexed: false,
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_init",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_calldata",
                  type: "bytes",
                },
              ],
              name: "DiamondCut",
              type: "event",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "_init",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "_calldata",
                  type: "bytes",
                },
              ],
              name: "diamondCut",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        _DefaultDiamondERC165Init: {
          address: "0xe68d85348f227d2ebEE814C38918F8A2D7d9B603",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes4[]",
                  name: "interfaceIds",
                  type: "bytes4[]",
                },
                {
                  internalType: "bytes4[]",
                  name: "interfaceIdsToRemove",
                  type: "bytes4[]",
                },
              ],
              name: "setERC165",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        _DefaultDiamondLoupeFacet: {
          address: "0x3Bcf4185443A339517aD4e580067f178d1B68E1D",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "_functionSelector",
                  type: "bytes4",
                },
              ],
              name: "facetAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "facetAddress_",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "facetAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "facetAddresses_",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_facet",
                  type: "address",
                },
              ],
              name: "facetFunctionSelectors",
              outputs: [
                {
                  internalType: "bytes4[]",
                  name: "facetFunctionSelectors_",
                  type: "bytes4[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "facets",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondLoupe.Facet[]",
                  name: "facets_",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "_interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        _DefaultDiamondOwnershipFacet: {
          address: "0xaD6E96fF641af53CCe4205DAfeCb8e3aCD0490E3",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "owner_",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        "CustomERC1155 - Actual": {
          address: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contractOwner",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "initContract",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "initData",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Diamond.Initialization[]",
                  name: "_initializations",
                  type: "tuple[]",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              stateMutability: "payable",
              type: "fallback",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "CustomERC1155_CreatingTokenButNotOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_HasAlreadyMinted",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_TokenDoesNotExist",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_UriDoesNotEndWithDotGLB",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ArrayLengthMismatch",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BalanceQueryZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BurnExceedsBalance",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BurnFromZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ERC1155ReceiverNotImplemented",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ERC1155ReceiverRejected",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__MintToZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__NotOwnerOrApproved",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__SelfApproval",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__TransferExceedsBalance",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__TransferToZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC165Base__InvalidInterfaceId",
              type: "error",
            },
            {
              inputs: [],
              name: "EnumerableSet__IndexOutOfBounds",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "CreateToken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "minter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "MintToken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "TransferBatch",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "TransferSingle",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "value",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "URI",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "accountsByToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "accounts",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
              ],
              name: "balanceOfBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_uri",
                  type: "string",
                },
              ],
              name: "createTokenType",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeBatchTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "status",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "tokensByAccount",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "totalHolders",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalTokenTypeCount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "uri",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              anonymous: false,
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  indexed: false,
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_init",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_calldata",
                  type: "bytes",
                },
              ],
              name: "DiamondCut",
              type: "event",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "_init",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "_calldata",
                  type: "bytes",
                },
              ],
              name: "diamondCut",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "owner_",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "_functionSelector",
                  type: "bytes4",
                },
              ],
              name: "facetAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "facetAddress_",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "facetAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "facetAddresses_",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_facet",
                  type: "address",
                },
              ],
              name: "facetFunctionSelectors",
              outputs: [
                {
                  internalType: "bytes4[]",
                  name: "facetFunctionSelectors_",
                  type: "bytes4[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "facets",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondLoupe.Facet[]",
                  name: "facets_",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "_interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "CustomERC1155 - Actual_DiamondProxy": {
          address: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contractOwner",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "initContract",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "initData",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Diamond.Initialization[]",
                  name: "_initializations",
                  type: "tuple[]",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              stateMutability: "payable",
              type: "fallback",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "CustomERC1155_CreatingTokenButNotOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_HasAlreadyMinted",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_TokenDoesNotExist",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_UriDoesNotEndWithDotGLB",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ArrayLengthMismatch",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BalanceQueryZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BurnExceedsBalance",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BurnFromZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ERC1155ReceiverNotImplemented",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ERC1155ReceiverRejected",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__MintToZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__NotOwnerOrApproved",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__SelfApproval",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__TransferExceedsBalance",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__TransferToZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC165Base__InvalidInterfaceId",
              type: "error",
            },
            {
              inputs: [],
              name: "EnumerableSet__IndexOutOfBounds",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "CreateToken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "minter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "MintToken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "TransferBatch",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "TransferSingle",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "value",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "URI",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "accountsByToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "accounts",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
              ],
              name: "balanceOfBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_uri",
                  type: "string",
                },
              ],
              name: "createTokenType",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeBatchTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "status",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "tokensByAccount",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "totalHolders",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalTokenTypeCount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "uri",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              anonymous: false,
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  indexed: false,
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_init",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_calldata",
                  type: "bytes",
                },
              ],
              name: "DiamondCut",
              type: "event",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "_init",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "_calldata",
                  type: "bytes",
                },
              ],
              name: "diamondCut",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "owner_",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "_functionSelector",
                  type: "bytes4",
                },
              ],
              name: "facetAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "facetAddress_",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "facetAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "facetAddresses_",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_facet",
                  type: "address",
                },
              ],
              name: "facetFunctionSelectors",
              outputs: [
                {
                  internalType: "bytes4[]",
                  name: "facetFunctionSelectors_",
                  type: "bytes4[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "facets",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondLoupe.Facet[]",
                  name: "facets_",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "_interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        CustomERC1155: {
          address: "0x78B5200D2Fc908E41E25AbD7698F6BCaf21AeF24",
          abi: [
            {
              inputs: [],
              name: "CustomERC1155_CreatingTokenButNotOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_HasAlreadyMinted",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_TokenDoesNotExist",
              type: "error",
            },
            {
              inputs: [],
              name: "CustomERC1155_UriDoesNotEndWithDotGLB",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ArrayLengthMismatch",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BalanceQueryZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BurnExceedsBalance",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__BurnFromZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ERC1155ReceiverNotImplemented",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__ERC1155ReceiverRejected",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__MintToZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__NotOwnerOrApproved",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__SelfApproval",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__TransferExceedsBalance",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC1155Base__TransferToZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC165Base__InvalidInterfaceId",
              type: "error",
            },
            {
              inputs: [],
              name: "EnumerableSet__IndexOutOfBounds",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "CreateToken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "minter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "MintToken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "TransferBatch",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "TransferSingle",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "value",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "URI",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "accountsByToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "accounts",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
              ],
              name: "balanceOfBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_uri",
                  type: "string",
                },
              ],
              name: "createTokenType",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeBatchTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "status",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "tokensByAccount",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "totalHolders",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalTokenTypeCount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "uri",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        DiamondInit: {
          address: "0x4d1E6B6C684E74a8129A03cDfAb041EfA0708F8f",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        _DefaultDiamondCutFacet: {
          address: "0x429dbdE7913c0Ed51E4B21163760B92eE66Ff5f5",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  indexed: false,
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_init",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_calldata",
                  type: "bytes",
                },
              ],
              name: "DiamondCut",
              type: "event",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "enum IDiamondCut.FacetCutAction",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondCut.FacetCut[]",
                  name: "_diamondCut",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "_init",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "_calldata",
                  type: "bytes",
                },
              ],
              name: "diamondCut",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        _DefaultDiamondERC165Init: {
          address: "0xe68d85348f227d2ebEE814C38918F8A2D7d9B603",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes4[]",
                  name: "interfaceIds",
                  type: "bytes4[]",
                },
                {
                  internalType: "bytes4[]",
                  name: "interfaceIdsToRemove",
                  type: "bytes4[]",
                },
              ],
              name: "setERC165",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        _DefaultDiamondLoupeFacet: {
          address: "0x3Bcf4185443A339517aD4e580067f178d1B68E1D",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "_functionSelector",
                  type: "bytes4",
                },
              ],
              name: "facetAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "facetAddress_",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "facetAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "facetAddresses_",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_facet",
                  type: "address",
                },
              ],
              name: "facetFunctionSelectors",
              outputs: [
                {
                  internalType: "bytes4[]",
                  name: "facetFunctionSelectors_",
                  type: "bytes4[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "facets",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "facetAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes4[]",
                      name: "functionSelectors",
                      type: "bytes4[]",
                    },
                  ],
                  internalType: "struct IDiamondLoupe.Facet[]",
                  name: "facets_",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "_interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        _DefaultDiamondOwnershipFacet: {
          address: "0xaD6E96fF641af53CCe4205DAfeCb8e3aCD0490E3",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "owner_",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
