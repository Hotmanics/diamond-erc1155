// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {LibDiamond} from "hardhat-deploy/solc_0.8/diamond/libraries/LibDiamond.sol";
import {IDiamondLoupe} from "hardhat-deploy/solc_0.8/diamond/interfaces/IDiamondLoupe.sol";
import {IDiamondCut} from "hardhat-deploy/solc_0.8/diamond/interfaces/IDiamondCut.sol";
import {UsingDiamondOwner} from "hardhat-deploy/solc_0.8/diamond/UsingDiamondOwner.sol";
import {IERC173} from "@solidstate/contracts/interfaces/IERC173.sol";
import {IERC165} from "@solidstate/contracts/interfaces/IERC165.sol";
import {CustomERC1155Storage} from "../CustomERC1155Storage.sol";
import {CustomERC1155} from "../CustomERC1155.sol";
import {Storage, WithStorage} from "./WithStorage.sol";

/**
 * @title Custom ERC1155 Diamond Initializer
 * @author Jacob Homanics
 *
 * This smart contract initializes the state variables for the Custom ERC1155.
 * @dev This contract follows the Diamond Storage Pattern where state variables are stored in libraries.
 *          This contract implements a library for Custom ERC1155 Storage management.
 * @dev This contract inherits from UsingDiamondOwner. Which implements a modifier that only succeeds if the caller is the owner of the Diamond.
 * @dev This contract inherits from WithStorage. It accesses the DiamondStorage and Initialization Storage information.
 */
contract DiamondInit is UsingDiamondOwner, WithStorage {
    ///////////////////
    // Functions
    ///////////////////

    ///////////////////
    // External Functions
    ///////////////////

    /**
     *
     * @param owner: The owner of the Custom ERC1155 Facet.
     * @notice This function initializes the facet's state variables.
     * @dev As an added safety measure, we add the onlyOwner modifier so that only the owner of the Diamond can make changes.
     */
    function init(address owner) external onlyOwner {
        //As an additional safety measure, we return out of the function if it has already been called.
        if (s().isInitialized) return;

        a().owner = owner;

        // adding ERC165 data
        ds().supportedInterfaces[type(IERC165).interfaceId] = true;
        ds().supportedInterfaces[type(IDiamondCut).interfaceId] = true;
        ds().supportedInterfaces[type(IDiamondLoupe).interfaceId] = true;
        ds().supportedInterfaces[type(IERC173).interfaceId] = true;

        s().isInitialized = true;
    }

    ///////////////////
    // Internal Functions
    ///////////////////

    /**
     * Gets the layout struct from storage.
     */
    function a() internal pure returns (CustomERC1155Storage.Layout storage) {
        return CustomERC1155Storage.layout();
    }
}
