const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        DiamondExample: {
          address: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
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
              inputs: [],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getGreeting",
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
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "nonpayable",
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
        DiamondExample_DiamondProxy: {
          address: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
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
              inputs: [],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getGreeting",
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
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "nonpayable",
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
        DiamondInit: {
          address: "0x76f74d88Ff3d1446eE30Dda8419a993B3aFDABC3",
          abi: [
            {
              inputs: [],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        SimpleStorageFacet: {
          address: "0xf94FA2b7ccEb111858408f8dfa21F825F59F8eb3",
          abi: [
            {
              inputs: [],
              name: "getGreeting",
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
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "greeting",
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
              inputs: [],
              name: "premium",
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
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
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
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
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
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
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
