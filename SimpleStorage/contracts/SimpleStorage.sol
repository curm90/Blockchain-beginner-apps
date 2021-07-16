// SPDX-License-Identifier: MIT
pragma solidity ^0.5.1;

contract SimpleStorage {
  uint256 data;

  function set(uint256 num) public {
    data = num;
  }

  function get() public view returns (uint256) {
    return data;
  }
}
