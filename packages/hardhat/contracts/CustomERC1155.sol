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

import {SolidStateERC1155} from "@solidstate/contracts/token/ERC1155/SolidStateERC1155.sol";
import {ERC1155MetadataStorage} from "@solidstate/contracts/token/ERC1155/metadata/ERC1155MetadataStorage.sol";
import {ERC1155Metadata} from "@solidstate/contracts/token/ERC1155/metadata/ERC1155Metadata.sol";
import {IERC1155Metadata} from "@solidstate/contracts/token/ERC1155/metadata/IERC1155Metadata.sol";
import {CustomERC1155Storage} from "./CustomERC1155Storage.sol";
import "./libraries/strings.sol";

/**
 * @title SolidState ERC1155 implementation
 */
contract CustomERC1155 is SolidStateERC1155 {
    using strings for *;

    error CustomERC1155_TokenDoesNotExist();
    error CustomERC1155_HasAlreadyMinted();
    error CustomERC1155_UriDoesNotEndWithDotGLB();
    error CustomERC1155_CreatingTokenButNotOwner();

    function createNewToken(string memory _uri) external {
        if (msg.sender != CustomERC1155Storage.layout().owner) {
            revert CustomERC1155_CreatingTokenButNotOwner();
        }

        //https://github.com/Arachnid/solidity-stringutils
        strings.slice memory s = _uri.toSlice();
        if (!s.endsWith(".glb".toSlice())) {
            revert CustomERC1155_UriDoesNotEndWithDotGLB();
        }

        ERC1155MetadataStorage.layout().tokenURIs[0] = _uri;
        CustomERC1155Storage.layout().totalTokenTypeCount++;
    }

    function mintToken(uint256 tokenId) external {
        mint(tokenId, 1);
    }

    function mint(uint256 tokenId, uint256 tokenAmount) internal {
        if (totalTokenTypeCount() > 0) {
            if (tokenId > totalTokenTypeCount() - 1) {
                revert CustomERC1155_TokenDoesNotExist();
            }
        } else {
            revert CustomERC1155_TokenDoesNotExist();
        }

        if (CustomERC1155Storage.layout().hasMinted[msg.sender] == true) {
            revert CustomERC1155_HasAlreadyMinted();
        }

        _mint(msg.sender, tokenId, tokenAmount, "");
        CustomERC1155Storage.layout().hasMinted[msg.sender] = true;
    }

    function uri(uint256 tokenId) public view override(ERC1155Metadata, IERC1155Metadata) returns (string memory) {
        ERC1155MetadataStorage.Layout storage l = ERC1155MetadataStorage.layout();

        return l.tokenURIs[tokenId];
    }

    function totalTokenTypeCount() public view returns (uint256) {
        return CustomERC1155Storage.layout().totalTokenTypeCount;
    }

    function owner() external view returns (address) {
        return CustomERC1155Storage.layout().owner;
    }
}
