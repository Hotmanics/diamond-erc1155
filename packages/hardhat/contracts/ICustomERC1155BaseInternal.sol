// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import {ICustomERC1155Internal} from "./interfaces/ICustomERC1155Internal.sol";

/**
 * @title Interface for Custom ERC115 Internal
 * @author Jacob Homanics
 *
 * This smart contract hosts the error messages for Custom ERC1155 Internal and inherits the events as well.
 */

interface ICustomERC1155BaseInternal is ICustomERC1155Internal {
    ///////////////////
    // Errors
    ///////////////////

    error CustomERC1155_TokenDoesNotExist();
    error CustomERC1155_HasAlreadyMinted();
    error CustomERC1155_UriDoesNotEndWithDotGLB();
    error CustomERC1155_CreatingTokenButNotOwner();
}
