// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {LibDiamond} from "hardhat-deploy/solc_0.8/diamond/libraries/LibDiamond.sol";

/**
 * @title The initialization information for the Custom ERC1155 Initialization Diamond Facet.
 * @author Jacob Homanics
 * @notice This may be able to be improved and cleaned up a bit.
 */

struct Storage {
    bool isInitialized;
}

/**
 * @title With Storage
 * @author Jacob Homanics
 * @notice Hosts the storage slots for DiamondStorage and Storage.
 */
contract WithStorage {
    ///////////////////
    // Functions
    ///////////////////

    ///////////////////
    // Internal Functions
    ///////////////////

    function s() internal pure returns (Storage storage cs) {
        bytes32 position = keccak256("jacobhomanics.contract.storage");
        assembly {
            cs.slot := position
        }
    }

    function ds() internal pure returns (LibDiamond.DiamondStorage storage) {
        return LibDiamond.diamondStorage();
    }
}
