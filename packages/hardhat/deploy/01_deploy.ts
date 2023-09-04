import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { diamond } = hre.deployments;

  await diamond.deploy("ERC1155Example", {
    from: deployer,
    autoMine: true,
    log: true,
    waitConfirmations: 1,
    facets: ["DiamondInit", "CustomERC1155"],
    excludeSelectors: {
      CustomERC1155: ["supportsInterface"],
    },
    execute: {
      contract: "DiamondInit",
      methodName: "init",
      args: [],
    },
  });
};

export default deployYourContract;

deployYourContract.tags = ["ERC1155Example"];
