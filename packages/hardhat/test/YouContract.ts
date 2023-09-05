import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import constants from "../scripts/constants";
import { cutDiamond } from "../scripts/Diamond.cut";
// import { deployDiamondCutFacet, deployFacet, deployDiamond, deployDiamondInit } from '../scripts/Diamond.deploy';
// import { FacetCutAction } from 'hardhat-deploy/types';
import { CustomERC1155, IDiamondCut } from "../typechain-types";
import { deployDiamondCutFacet, deployFacet, deployDiamond, deployDiamondInit } from "../scripts/Diamond.deploy";

/**
 * Utility function to make a facet cut on the diamond.
 * @param diamondAddress diamond cut facet contract
 * @param facetCuts an array of facet cuts to be made
 * @param init address (?)
 */
// async function makeCut(
//   signer: SignerWithAddress,
//   diamondAddress: string,
//   facetCuts: IDiamondCut.FacetCutStruct[],
//   init: string,
// ) {
//   const diamondCutFacet = await ethers.getContractAt('DiamondCutFacet', diamondAddress, signer);
//   const tx = await diamondCutFacet.diamondCut(facetCuts, init, '0x', {gasLimit: 800000});
//   const receipt = await tx.wait();
//   if (!receipt.status) {
//     throw Error(`Diamond upgrade failed: ${tx.hash}`);
//   }
// }

describe("Diamond", function () {
  let owner: SignerWithAddress;
  let diamondCutFacetAddress: string;
  let diamondAddress: string;
  let diamondInitAddress: string;
  const facetCuts: IDiamondCut.FacetCutStruct[] = []; // each facet will be recorded here
  const facetNameToAddress: Record<string, string> = {};

  before(async () => {
    [owner] = await ethers.getSigners();
  });

  describe("Diamond Deployment & Cut", async () => {
    it("should deploy DiamondCutFacet", async () => {
      diamondCutFacetAddress = await deployDiamondCutFacet();
    });

    it("should deploy Diamond", async () => {
      diamondAddress = await deployDiamond(owner.address, diamondCutFacetAddress);
    });

    it("should deploy DiamondInit", async () => {
      diamondInitAddress = await deployDiamondInit();
    });

    // deploy facets
    constants.FacetNames.forEach(facetName =>
      it("should deploy " + facetName, async () => {
        const facetCut = await deployFacet(facetName);
        facetCuts.push(facetCut);
        facetNameToAddress[facetName] = facetCut.facetAddress as string;
      }),
    );

    // cut the diamond to register facets at the diamond
    // test each facet independently from that point on
    it("should upgrade Diamond via DiamondCutFacet", async () => {
      await cutDiamond(diamondAddress, diamondInitAddress, facetCuts);
    });
  });

  describe("CustomERC1155", async () => {
    let ownershipFacet: CustomERC1155;
    before(async () => {
      // sometimes, you dont' even need to cast typechain overloads the getContractAt within hardhat
      ownershipFacet = await ethers.getContractAt("CustomERC1155", diamondAddress);
    });

    it("should have the correct owner", async () => {
      const [owner] = await ethers.getSigners();
      expect(await ownershipFacet.owner()).to.be.eq(owner.address);
    });
  });
});
