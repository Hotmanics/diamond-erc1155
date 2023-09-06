// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import customERC1155 from "../../hardhat/artifacts-zk/contracts/CustomERC1155/CustomERC1155.sol/CustomERC1155.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import diamond from "../../hardhat/artifacts-zk/contracts/Diamonds/Diamond.sol/Diamond.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import diamondCutFacet from "../../hardhat/artifacts-zk/contracts/Diamonds/DiamondCutFacet.sol/DiamondCutFacet.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import diamondLoupeFacet from "../../hardhat/artifacts-zk/contracts/Diamonds/DiamondLoupeFacet.sol/DiamondLoupeFacet.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import diamondInit from "../../hardhat/artifacts-zk/contracts/upgradeInitializers/DiamondInit.sol/DiamondInit.json";

const zk_contracts = {
  280: [
    {
      chainId: "280",
      name: "zkSyncTestnet",
      contracts: {
        "Diamond - With CustomERC1155": {
          address: "0x4B6572aCfd72F05303DAC5c7c30D61A055790D9e",
          abi: customERC1155.abi,
        },
        Diamond: {
          address: "0x4B6572aCfd72F05303DAC5c7c30D61A055790D9e",
          abi: diamond.abi,
        },
        DiamondCutFacet: {
          address: "0x48496Adb50Cc1837261034b413023D1e7A0beAe1",
          abi: diamondCutFacet.abi,
        },

        DiamondInit: {
          address: "0x0F83dA3C11d3f85dc69B3Bc9D677c42f314fd00b",
          abi: diamondInit.abi,
        },
        DiamondLoupeFacet: {
          address: "0x513EB711e2374f0F54dC9e474A781f6554d56796",
          abi: diamondLoupeFacet.abi,
        },
        CustomERC1155: {
          address: "0xdDDC74DF7656B9D6b787c1918d577Fc827507623",
          abi: customERC1155.abi,
        },
      },
    },
  ],
};

export default zk_contracts;
