// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import {SolidStateERC1155} from "@solidstate/contracts/token/ERC1155/SolidStateERC1155.sol";
import {ERC1155MetadataStorage} from "@solidstate/contracts/token/ERC1155/metadata/ERC1155MetadataStorage.sol";
import {ERC1155Metadata} from "@solidstate/contracts/token/ERC1155/metadata/ERC1155Metadata.sol";
import {IERC1155Metadata} from "@solidstate/contracts/token/ERC1155/metadata/IERC1155Metadata.sol";
import {CustomERC1155Storage} from "./CustomERC1155Storage.sol";
import {ICustomERC1155BaseInternal} from "./ICustomERC1155BaseInternal.sol";
import "../libraries/strings.sol";

/**
 * @title Custom ERC115 Internal
 * @author Jacob Homanics
 *
 * This contract contains all of the internal functions for Custom ERC1155.
 *
 * @dev This contract implements a library for string management. It was pulled from: https://github.com/Arachnid/solidity-stringutils
 * @dev This contract follows the Diamond Storage Pattern where state variables are stored in libraries.
 *          This contract implements a library for Custom ERC1155 Storage management.
 *          This contract implements a library for Solid State's ERC 1155 Metadata Storage management.
 * @dev This contract inherits from SolidStateERC1155. Which is a smart contract that follows the Diamond Storage Pattern and
 *      allows for easy creation of ERC1155 compliant smart contracts.
 *      Source code and info found here: https://github.com/solidstate-network/solidstate-solidity
 * @dev This contract inherits from ICustomERC1155Internal. Which contains the errors of the smart contract.
 */
contract CustomERC1155Internal is SolidStateERC1155, ICustomERC1155BaseInternal {
    ///////////////////
    // Types
    ///////////////////

    //Pulling in strings library
    using strings for *;

    ///////////////////
    // Functions
    ///////////////////

    ///////////////////
    // Internal Functions
    ///////////////////

    /**
     *
     * @param _uri: The uri to set for the created token.
     * @notice This function creates a new token type.
     */
    function _createNewToken(string memory _uri) internal {
        //Revert if the owner of the smart contract is not msg.sender.
        if (msg.sender != CustomERC1155Storage.layout().owner) {
            revert CustomERC1155_CreatingTokenButNotOwner();
        }

        //Get slice info from _uri.
        strings.slice memory s = _uri.toSlice();
        //Check the slice data to see if the ending bytes of _uri do not match that of ".glb", Revert if so.
        if (!s.endsWith(".glb".toSlice())) {
            revert CustomERC1155_UriDoesNotEndWithDotGLB();
        }

        //Set uri of newly minted token.
        ERC1155MetadataStorage.layout().tokenURIs[CustomERC1155Storage.layout().totalTokenTypeCount] = _uri;
        //Incremets count of total tokens in collection.
        CustomERC1155Storage.layout().totalTokenTypeCount++;

        emit CreateToken(msg.sender, CustomERC1155Storage.layout().totalTokenTypeCount - 1);
    }

    /**
     *
     * @param tokenId The id of the token type to mint tokens of.
     * @notice This function mints 1 token of a given token type to the user.
     */
    function _mintToken(uint256 tokenId) internal {
        _mintTokenById(tokenId, 1);
    }

    /**
     *
     * @param tokenId: The id of the token type to mint tokens of.
     * @param tokenAmount: The amount of tokens to mint of token type of tokenId.
     * @notice This function mints an amount of tokens of a given token type to the user.
     */
    function _mintTokenById(uint256 tokenId, uint256 tokenAmount) internal {
        //Checks if token type of tokenId has been created yet.
        if (CustomERC1155Storage.layout().totalTokenTypeCount > 0) {
            // Check if the supplied tokenId is greater than the number of created tokens - 1.
            if (tokenId > CustomERC1155Storage.layout().totalTokenTypeCount - 1) {
                revert CustomERC1155_TokenDoesNotExist();
            }
        }
        //If no tokens have been created yet, then rus this code.
        else {
            revert CustomERC1155_TokenDoesNotExist();
        }

        //Checks if user has minted a token.
        if (CustomERC1155Storage.layout().hasMinted[msg.sender] == true) {
            revert CustomERC1155_HasAlreadyMinted();
        }

        _mint(msg.sender, tokenId, tokenAmount, "");
        CustomERC1155Storage.layout().hasMinted[msg.sender] = true;

        emit MintToken(msg.sender, tokenId);
    }
}
