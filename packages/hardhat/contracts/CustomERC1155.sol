// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "@solidstate/contracts/token/ERC1155/SolidStateERC1155.sol";

/**
 * @title SolidState ERC1155 implementation
 */
contract CustomERC1155 is SolidStateERC1155 {
    function mint() external {
        _mint(msg.sender, 0, 5, "");
    }
}
