// SPDX-License-Identifier: MIT
pragma solidity ^0.5.1;

contract SimpleStorage {
  string data;

  constructor(_data) public {
    data = _data;
  }

  function set(string memory _data) public {
    data = _data;
  }

  function get() public view returns (string memory) {
    return data;
  }
}
