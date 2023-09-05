import { Contract } from "ethers";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { IDiamondCut } from "../../typechain-types";

export async function setupUsers<T extends { [contractName: string]: Contract }>(
  addresses: string[],
  contracts: T,
): Promise<({ address: string } & T)[]> {
  const users: ({ address: string } & T)[] = [];
  for (const address of addresses) {
    users.push(await setupUser(address, contracts));
  }
  return users;
}

export async function setupUser<T extends { [contractName: string]: Contract }>(
  address: string,
  contracts: T,
): Promise<{ address: string } & T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = { address };
  for (const key of Object.keys(contracts)) {
    user[key] = contracts[key].connect(await ethers.getSigner(address));
  }
  return user as { address: string } & T;
}

/**
 * Utility function to make a facet cut on the diamond.
 * @param diamondAddress diamond cut facet contract
 * @param facetCuts an array of facet cuts to be made
 * @param init address (?)
 */
export async function makeCut(
  signer: SignerWithAddress,
  diamondAddress: string,
  facetCuts: IDiamondCut.FacetCutStruct[],
  init: string,
) {
  const diamondCutFacet = await ethers.getContractAt("DiamondCutFacet", diamondAddress, signer);
  const tx = await diamondCutFacet.diamondCut(facetCuts, init, "0x", { gasLimit: 800000 });
  const receipt = await tx.wait();
  if (!receipt.status) {
    throw Error(`Diamond upgrade failed: ${tx.hash}`);
  }
}
