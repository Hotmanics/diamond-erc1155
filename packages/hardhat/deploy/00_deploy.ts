import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a Diamond contract with the CustomERC1155 Facet and custom initialization.
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  //grabs deployer from environment
  const { deployer } = await hre.getNamedAccounts();
  //grabbing diamond types
  const { diamond } = hre.deployments;

  let owner;

  //Checking to see if the chain is localhost, if so deploy with default hardhat/anvil key.
  //Otherwise deploy with key from hardhat config
  const chainId = hre.network.config.chainId;
  if (chainId === 31337) {
    owner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  } else {
    owner = deployer;
  }

  //Deploys diamond with DiamondInit and CustomERC155 facets and calls init function on DiamondInitFacet.
  await diamond.deploy("CustomERC1155 - Actual", {
    from: owner,
    autoMine: true,
    log: true,
    waitConfirmations: 1,
    facets: ["DiamondInit", "CustomERC1155"],
    excludeSelectors: {
      CustomERC1155: ["supportsInterface", "owner"],
    },
    execute: {
      contract: "DiamondInit",
      methodName: "init",
      args: [owner],
    },
  });
};

export default deployYourContract;

deployYourContract.tags = ["ERC1155Example"];
