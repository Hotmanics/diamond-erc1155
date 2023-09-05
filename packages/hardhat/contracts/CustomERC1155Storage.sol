// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @title ERC1155 metadata extensions
 */
library CustomERC1155Storage {
    bytes32 internal constant STORAGE_SLOT = keccak256("jacobhomanics.contracts.storage.CustomERC1155");

    struct Layout {
        mapping(address => bool) hasMinted;
        uint256 totalTokenTypeCount;
    }

    function layout() internal pure returns (Layout storage l) {
        bytes32 slot = STORAGE_SLOT;
        assembly {
            l.slot := slot
        }
    }
}
