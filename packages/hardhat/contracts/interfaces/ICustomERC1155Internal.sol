// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

/**
 * @title Custom ERC1155 Internal Interface
 * @author Jacob Homanics
 *
 * Interface hosting the events for Custom ERC1155.
 */
interface ICustomERC1155Internal {
    event CreateToken(address indexed operator, uint256 id);

    event MintToken(address indexed minter, uint256 id);
}
