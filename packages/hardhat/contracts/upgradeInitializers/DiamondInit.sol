// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * \
 * Author: Nick Mudge <nick@perfectabstractions.com> (https://twitter.com/mudgen)
 * EIP-2535 Diamonds: https://eips.ethereum.org/EIPS/eip-2535
 *
 * Implementation of a diamond.
 * /*****************************************************************************
 */

import {LibDiamond} from "hardhat-deploy/solc_0.8/diamond/libraries/LibDiamond.sol";
import {IDiamondLoupe} from "hardhat-deploy/solc_0.8/diamond/interfaces/IDiamondLoupe.sol";
import {IDiamondCut} from "hardhat-deploy/solc_0.8/diamond/interfaces/IDiamondCut.sol";
import {UsingDiamondOwner} from "hardhat-deploy/solc_0.8/diamond/UsingDiamondOwner.sol";

import {IERC173} from "@solidstate/contracts/interfaces/IERC173.sol";
import {IERC165} from "@solidstate/contracts/interfaces/IERC165.sol";
import {CustomERC1155Storage} from "../CustomERC1155Storage.sol";
import {CustomERC1155} from "../CustomERC1155.sol";
import {GasLoverStorage, WithStorage} from "./WithStorage.sol";

// It is expected that this contract is customized if you want to deploy your diamond
// with data from a deployment script. Use the init function to initialize state variables
// of your diamond. Add parameters to the init function if you need to.

contract DiamondInit is UsingDiamondOwner, WithStorage {
    function a() internal pure returns (CustomERC1155Storage.Layout storage) {
        return CustomERC1155Storage.layout();
    }

    // You can add parameters to this function in order to pass in
    // data to set your own state variables
    function init(address owner) external {
        if (s().isInitialized) return;

        a().owner = owner;

        // adding ERC165 data
        ds().supportedInterfaces[type(IERC165).interfaceId] = true;
        ds().supportedInterfaces[type(IDiamondCut).interfaceId] = true;
        ds().supportedInterfaces[type(IDiamondLoupe).interfaceId] = true;
        ds().supportedInterfaces[type(IERC173).interfaceId] = true;

        // add your own state variables
        // EIP-2535 specifies that the `diamondCut` function takes two optional
        // arguments: address _init and bytes calldata _calldata
        // These arguments are used to execute an arbitrary function using delegatecall
        // in order to set state variables in the diamond during deployment or an upgrade
        // More info here: https://eips.ethereum.org/EIPS/eip-2535#diamond-interface

        s().isInitialized = true;
    }
}
