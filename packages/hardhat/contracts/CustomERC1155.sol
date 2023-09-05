// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import {SolidStateERC1155} from "@solidstate/contracts/token/ERC1155/SolidStateERC1155.sol";
import {ERC1155MetadataStorage} from "@solidstate/contracts/token/ERC1155/metadata/ERC1155MetadataStorage.sol";
import {ERC1155Metadata} from "@solidstate/contracts/token/ERC1155/metadata/ERC1155Metadata.sol";
import {IERC1155Metadata} from "@solidstate/contracts/token/ERC1155/metadata/IERC1155Metadata.sol";
import {CustomERC1155Storage} from "./CustomERC1155Storage.sol";

/**
 * @title SolidState ERC1155 implementation
 */
contract CustomERC1155 is SolidStateERC1155 {
    error CustomERC1155_TokenDoesNotExist();
    error CustomERC1155_HasAlreadyMinted();

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

    function totalTokenTypeCount() public view returns (uint256) {
        return CustomERC1155Storage.layout().totalTokenTypeCount;
    }

    function createNewToken(string memory _uri) external contains(".glb", _uri) {
        ERC1155MetadataStorage.layout().tokenURIs[0] = _uri;
        CustomERC1155Storage.layout().totalTokenTypeCount++;
    }

    function uri(uint256 tokenId) public view override(ERC1155Metadata, IERC1155Metadata) returns (string memory) {
        ERC1155MetadataStorage.Layout storage l = ERC1155MetadataStorage.layout();

        return l.tokenURIs[tokenId];
    }

    modifier contains(string memory what, string memory where) {
        bytes memory whatBytes = bytes(what);
        bytes memory whereBytes = bytes(where);

        require(whereBytes.length >= whatBytes.length);

        bool found = false;
        for (uint256 i = 0; i <= whereBytes.length - whatBytes.length; i++) {
            bool flag = true;
            for (uint256 j = 0; j < whatBytes.length; j++) {
                if (whereBytes[i + j] != whatBytes[j]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                found = true;
                break;
            }
        }
        require(found);

        _;
    }
}
