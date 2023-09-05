// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import {ERC1155MetadataStorage} from "@solidstate/contracts/token/ERC1155/metadata/ERC1155MetadataStorage.sol";
import {ERC1155Metadata} from "@solidstate/contracts/token/ERC1155/metadata/ERC1155Metadata.sol";
import {IERC1155Metadata} from "@solidstate/contracts/token/ERC1155/metadata/IERC1155Metadata.sol";
import {CustomERC1155Storage} from "./CustomERC1155Storage.sol";
import {CustomERC1155Internal} from "./CustomERC1155Internal.sol";

/**
 * @title Custom ERC115
 * @author Jacob Homanics
 *
 * This contract adheres to the requirements for Smart Contract Development Test using ZkSync L2 from Game7 DAO.
 * Through this smart contract:
 *      1. You can deploy it on its own or as a facet on a diamond.
 *      2. Users cannot mint more tokens after having already minted.
 *      3. The owner should not be able to create new tokens unless it's uri ends in the '.glb' extensions.
 * @notice This contract can act as a standalone ERC1155 collection or be used as a Diamond Facet with Diamonds.
 */
contract CustomERC1155 is CustomERC1155Internal {
    ///////////////////
    // Functions
    ///////////////////

    ///////////////////
    // External Functions
    ///////////////////

    /**
     *
     * @param _uri: The uri of the token to create.
     * @notice Creates a new token type by calling the internal function from CustomERC1155Internal.
     */
    function createTokenType(string memory _uri) external {
        _createTokenType(_uri);
    }

    /**
     *
     * @param tokenId: The id of the token type to mint tokens of.
     * @notice Mints a new token by calling the internal function from CustomERC1155Internal.
     */
    function mint(uint256 tokenId) external {
        _mintByTokenId(tokenId);
    }

    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    // External & Public View & Pure Functions
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////

    /**
     *
     * @param tokenId: The id of the token to grab the uri for.
     * @notice Returns a uri of a token.
     */
    function uri(uint256 tokenId) public view override(ERC1155Metadata, IERC1155Metadata) returns (string memory) {
        ERC1155MetadataStorage.Layout storage l = ERC1155MetadataStorage.layout();
        return l.tokenURIs[tokenId];
    }

    /**
     * @notice Returns the total number of token types in the collection.
     */
    function totalTokenTypeCount() public view returns (uint256) {
        return CustomERC1155Storage.layout().totalTokenTypeCount;
    }

    /**
     * @notice Returns the owner of the smart contract.
     */
    function owner() external view returns (address) {
        return CustomERC1155Storage.layout().owner;
    }
}
