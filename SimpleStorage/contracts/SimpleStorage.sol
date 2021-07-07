// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  string data = 'Hello World!';

  function set(string memory _data) public {
    data = _data;
  }

  function get() public view returns (string memory) {
    return data;
  }
}
