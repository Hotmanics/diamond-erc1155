import { ethers, getNamedAccounts, getUnnamedAccounts } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { CustomERC1155, IDiamondCut } from "../typechain-types";
import { deployDiamondCutFacet, deployFacet, deployDiamond, deployDiamondInit } from "../scripts/Diamond.deploy";
import { cutDiamond } from "../scripts/Diamond.cut";
import constants from "../scripts/constants";
import { makeCut } from "./utils";
import { FacetCutAction } from "../scripts/FacetCutAction";

async function setup() {
  const { owner } = await getNamedAccounts();
  const users = await getUnnamedAccounts();

  const signer = ethers.provider.getSigner();
  const ownerSigner = await SignerWithAddress.create(signer);

  return { owner, users, ownerSigner };
}

describe("Diamond", function () {
  let diamondCutFacetAddress: string;
  let diamondAddress: string;
  let diamondInitAddress: string;
  const facetCuts: IDiamondCut.FacetCutStruct[] = []; // each facet will be recorded here
  const facetNameToAddress: Record<string, string> = {};

  describe("Diamond Deployment & Cut", async () => {
    it("should deploy DiamondCutFacet", async () => {
      diamondCutFacetAddress = await deployDiamondCutFacet();
    });

    it("should deploy Diamond", async () => {
      const { owner } = await setup();

      diamondAddress = await deployDiamond(owner, diamondCutFacetAddress);
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
      const { owner } = await setup();
      await cutDiamond(diamondAddress, diamondInitAddress, owner, facetCuts);
    });
  });

  describe("CustomERC1155", async () => {
    let customERC1155: CustomERC1155;
    let customERC1155Address: string;
    before(async () => {
      // sometimes, you dont' even need to cast typechain overloads the getContractAt within hardhat
      customERC1155 = await ethers.getContractAt("CustomERC1155", diamondAddress);
      customERC1155Address = facetNameToAddress["CustomERC1155"];
    });

    it("should have the correct owner", async () => {
      const { owner } = await setup();
      expect(await customERC1155.owner()).to.be.eq(owner);
    });

    it("should have the correct number", async () => {
      expect(await customERC1155.totalTokenTypeCount()).to.be.eq(0);
    });

    it("should remove all `CustomERC1155` functions", async () => {
      const signer = ethers.provider.getSigner();
      const ownerSigner = await SignerWithAddress.create(signer);

      await makeCut(
        ownerSigner,
        diamondAddress,
        [
          {
            facetAddress: ethers.constants.AddressZero, // remove facet address must be 0x0!
            action: FacetCutAction.Remove,
            functionSelectors: Object.keys(customERC1155.interface.functions).map(f =>
              customERC1155.interface.getSighash(f),
            ),
          },
        ],
        ethers.constants.AddressZero,
      );

      await expect(customERC1155.totalTokenTypeCount()).to.be.revertedWith("Diamond: Function does not exist");
    });

    it("should add all `CustomERC1155` functions back in", async () => {
      const { owner, ownerSigner } = await setup();

      await makeCut(
        ownerSigner,
        diamondAddress,
        [
          {
            facetAddress: customERC1155Address,
            action: FacetCutAction.Add,
            functionSelectors: Object.keys(customERC1155.interface.functions).map(f =>
              customERC1155.interface.getSighash(f),
            ),
          },
        ],
        ethers.constants.AddressZero,
      );

      expect(await customERC1155.owner()).to.be.eq(owner);
    });
  });
});
