// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

/**
 * @title Interface for Custom ERC115 Internal
 * @author Jacob Homanics
 *
 * This smart contract hosts the error messages for Custom ERC1155 Internal.
 */
interface ICustomERC1155Internal {
    ///////////////////
    // Errors
    ///////////////////

    error CustomERC1155_TokenDoesNotExist();
    error CustomERC1155_HasAlreadyMinted();
    error CustomERC1155_UriDoesNotEndWithDotGLB();
    error CustomERC1155_CreatingTokenButNotOwner();
}
