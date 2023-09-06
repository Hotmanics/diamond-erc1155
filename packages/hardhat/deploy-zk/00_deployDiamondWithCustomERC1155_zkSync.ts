import { Wallet /*, utils*/ } from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import constants from "../scripts/Diamonds/constants";
import { FacetCutAction } from "../scripts/Diamonds/FacetCutAction";
import { IDiamondCut } from "../typechain-types";
import { cutDiamond } from "../scripts/Diamonds/Diamond.cut";

// load env file
import dotenv from "dotenv";
dotenv.config();

// load wallet private key from env file
const PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || "";

if (!PRIVATE_KEY) throw "⛔️ Private key not detected! Add it to the .env file!";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();

  let owner;

  //Checking to see if the chain is localhost, if so deploy with default hardhat/anvil key.
  //Otherwise deploy with key from hardhat config
  const chainId = hre.network.config.chainId;
  if (chainId === 31337) {
    owner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  } else {
    owner = deployer;
  }

  // Initialize the wallet.
  const wallet = new Wallet(PRIVATE_KEY);

  // Create deployer object and load the artifact of the contract you want to deploy.
  const deployerObj = new Deployer(hre, wallet);

  const diamondCutFacetArtifact = await deployerObj.loadArtifact("DiamondCutFacet");
  console.log("Deploying DiamondCutFacet...");
  const diamondCutFacet = await deployerObj.deploy(diamondCutFacetArtifact);
  console.log(`${diamondCutFacetArtifact.contractName} was deployed to ${diamondCutFacet.address}`);

  const diamondArtifact = await deployerObj.loadArtifact("Diamond");
  console.log("Deploying Diamond...");
  const diamond = await deployerObj.deploy(diamondArtifact, [owner, diamondCutFacet.address]);
  console.log(`${diamondArtifact.contractName} was deployed to ${diamond.address}`);
  const diamondInitArtifact = await deployerObj.loadArtifact("DiamondInit");
  console.log("Deploying Diamond Init...");
  const diamondInit = await deployerObj.deploy(diamondInitArtifact);
  console.log(`${diamondInitArtifact.contractName} was deployed to ${diamondInit.address}`);

  const facetCuts: IDiamondCut.FacetCutStruct[] = []; // each facet will be recorded here
  const facetNameToAddress: Record<string, string> = {};

  for (let i = 0; i < constants.FacetNames.length; i++) {
    const facetCut = await deployFacet(deployerObj, constants.FacetNames[i]);
    facetCuts.push(facetCut);
    facetNameToAddress[constants.FacetNames[i]] = facetCut.facetAddress as string;
  }

  console.log("cutting diamond");
  await cutDiamond(diamond.address, diamondInit.address, owner, facetCuts);
  console.log("cut diamond");

  const customERC1155 = await hre.ethers.getContractAt("CustomERC1155", diamond.address);
  console.log(await customERC1155.owner());
}

async function deployFacet(deployer: Deployer, facetName: string) {
  const facetArtifact = await deployer.loadArtifact(facetName);
  console.log("deploying " + facetName + "...");
  const facet = await deployer.deploy(facetArtifact);
  console.log("deployed " + facetName + " to " + facet.address);
  return {
    facetAddress: facet.address,
    action: FacetCutAction.Add,
    functionSelectors: Object.keys(facet.interface.functions)
      // filter some functions to avoid clashes
      .filter(f => {
        if (f == "supportsInterface(bytes4)") {
          // there may be multiple of these, only accept that of the DiamondLoupeFacet
          if (facetName == "DiamondLoupeFacet") {
            return true;
          } else {
            return false;
          }
        }
        return true;
      })
      // map functions to function selectors
      .map(f => facet.interface.getSighash(f)),
  };
}
