// Layout of Contract:
// version
// imports
// errors
// interfaces, libraries, contracts
// Type declarations
// State variables
// Events
// Modifiers
// Functions

// Layout of Functions:
// constructor
// receive function (if exists)
// fallback function (if exists)
// external
// public
// internal
// private
// view & pure functions

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import {ERC1155MetadataStorage} from "@solidstate/contracts/token/ERC1155/metadata/ERC1155MetadataStorage.sol";
import {ERC1155Metadata} from "@solidstate/contracts/token/ERC1155/metadata/ERC1155Metadata.sol";
import {IERC1155Metadata} from "@solidstate/contracts/token/ERC1155/metadata/IERC1155Metadata.sol";
import {CustomERC1155Storage} from "./CustomERC1155Storage.sol";

import {CustomERC1155Internal} from "./CustomERC1155Internal.sol";

import "./libraries/strings.sol";

/**
 * @title SolidState ERC1155 implementation
 */
contract CustomERC1155 is CustomERC1155Internal {
    function uri(uint256 tokenId) public view override(ERC1155Metadata, IERC1155Metadata) returns (string memory) {
        ERC1155MetadataStorage.Layout storage l = ERC1155MetadataStorage.layout();
        return l.tokenURIs[tokenId];
    }

    function totalTokenTypeCount() public view returns (uint256) {
        return CustomERC1155Storage.layout().totalTokenTypeCount;
    }

    function anOwner() external view returns (address) {
        return CustomERC1155Storage.layout().owner;
    }
}
