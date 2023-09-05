import { ethers, getNamedAccounts, getUnnamedAccounts } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { CustomERC1155, IDiamondCut } from "../typechain-types";
import {
  deployDiamondCutFacet,
  deployFacet,
  deployDiamond,
  deployDiamondInit,
} from "../scripts/Diamonds/Diamond.deploy";
import { cutDiamond } from "../scripts/Diamonds/Diamond.cut";
import constants from "../scripts/Diamonds/constants";
import { makeCut } from "./utils";
import { FacetCutAction } from "../scripts/Diamonds/FacetCutAction";
import { setupUser } from "./utils";

async function setup() {
  const { owner, troll } = await getNamedAccounts();
  const users = await getUnnamedAccounts();

  const signer = ethers.provider.getSigner();
  const ownerSigner = await SignerWithAddress.create(signer);

  return { owner, troll, users, ownerSigner };
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
    before(async () => {
      // sometimes, you dont' even need to cast typechain overloads the getContractAt within hardhat
      customERC1155 = await ethers.getContractAt("CustomERC1155", diamondAddress);
    });

    it("should have the correct owner", async () => {
      const { owner } = await setup();
      expect(await customERC1155.owner()).to.be.eq(owner);
    });

    it("should have the correct number", async () => {
      expect(await customERC1155.totalTokenTypeCount()).to.be.eq(0);
    });

    it("mint: should revert from no tokens having been created yet", async () => {
      await expect(customERC1155.mint(0)).to.be.revertedWithCustomError(
        customERC1155,
        "CustomERC1155_TokenDoesNotExist",
      );
    });

    it("createTokenType: should revert from not passing in a uri that ends in .glb", async () => {
      await expect(customERC1155.createTokenType("test1.gl")).to.be.revertedWithCustomError(
        customERC1155,
        "CustomERC1155_UriDoesNotEndWithDotGLB",
      );
    });

    it("createTokenType: should revert from creating tokens as not the owner", async () => {
      const contracts = {
        CustomERC1155: customERC1155,
      };

      const { troll } = await setup();
      //connect troll account
      const troll0 = await setupUser(troll, contracts);
      //call createTokenType as troll
      await expect(troll0.CustomERC1155.createTokenType("ndjnjesn.glb")).to.be.revertedWithCustomError(
        troll0.CustomERC1155,
        "CustomERC1155_CreatingTokenButNotOwner",
      );
    });

    it("createTokenType: should create a new token type", async () => {
      await customERC1155.createTokenType("test1.glb");
      expect(await customERC1155.totalTokenTypeCount()).to.be.eq(1);
      expect(await customERC1155.uri(0)).to.be.eq("test1.glb");
    });

    it("createTokenType: should result in two tokens having different uris", async () => {
      await customERC1155.createTokenType("test2.glb");

      const uri0 = await customERC1155.uri(0);
      const uri1 = await customERC1155.uri(1);
      expect(uri0).to.not.equal(uri1);
    });

    it("mint: should revert from the specified token not having been created yet", async () => {
      await expect(customERC1155.mint(2)).to.be.revertedWithCustomError(
        customERC1155,
        "CustomERC1155_TokenDoesNotExist",
      );
    });

    it("mint: should mint a token", async () => {
      const { owner } = await setup();

      await customERC1155.mint(0);
      expect(await customERC1155.balanceOf(owner, 0)).to.be.eq(1);
    });

    it("mint: should revert from user having already minted", async () => {
      await expect(customERC1155.mint(0)).to.be.revertedWithCustomError(
        customERC1155,
        "CustomERC1155_HasAlreadyMinted",
      );
    });

    //Diamond Sanity Checks
    it("diamond sanity checks: should remove all `CustomERC1155` functions", async () => {
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

    it("diamond sanity checks: should add all `CustomERC1155` functions back in", async () => {
      const { owner, ownerSigner } = await setup();

      const customERC1155Address = facetNameToAddress["CustomERC1155"];

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
