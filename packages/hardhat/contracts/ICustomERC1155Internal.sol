// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

interface ICustomERC1155Internal {
    error CustomERC1155_TokenDoesNotExist();
    error CustomERC1155_HasAlreadyMinted();
    error CustomERC1155_UriDoesNotEndWithDotGLB();
    error CustomERC1155_CreatingTokenButNotOwner();
}
