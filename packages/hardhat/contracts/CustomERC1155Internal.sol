// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import {SolidStateERC1155} from "@solidstate/contracts/token/ERC1155/SolidStateERC1155.sol";
import {ERC1155MetadataStorage} from "@solidstate/contracts/token/ERC1155/metadata/ERC1155MetadataStorage.sol";
import {ERC1155Metadata} from "@solidstate/contracts/token/ERC1155/metadata/ERC1155Metadata.sol";
import {IERC1155Metadata} from "@solidstate/contracts/token/ERC1155/metadata/IERC1155Metadata.sol";
import {CustomERC1155Storage} from "./CustomERC1155Storage.sol";
import {ICustomERC1155Internal} from "./ICustomERC1155Internal.sol";

import "./libraries/strings.sol";

/**
 * @title SolidState ERC1155 implementation
 */
contract CustomERC1155Internal is SolidStateERC1155, ICustomERC1155Internal {
    using strings for *;

    function createNewToken(string memory _uri) internal {
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

    function mintToken(uint256 tokenId) internal {
        mint(tokenId, 1);
    }

    function mint(uint256 tokenId, uint256 tokenAmount) internal {
        if (CustomERC1155Storage.layout().totalTokenTypeCount > 0) {
            if (tokenId > CustomERC1155Storage.layout().totalTokenTypeCount - 1) {
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
}
