import { Abi } from "abitype";
import { Address } from "viem";
import contractsData from "~~/generated/deployedContracts";

// import zkContractsData from "~~/generated/zkDeployedContracts";
// export const loadedContracts = zkContractsData as GenericContractsDeclaration | null;

export const loadedContracts = contractsData as GenericContractsDeclaration | null;

type GenericContractsDeclaration = {
  [key: number]: readonly {
    name: string;
    chainId: string;
    contracts: {
      [key: string]: {
        address: Address;
        abi: Abi;
      };
    };
  }[];
};
