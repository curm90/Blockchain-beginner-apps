pragma solidity ^0.5.1;

contract AdvancedStorage {
  uint256[] public numbers;

  function addItem(uint256 num) public {
    numbers.push(num);
  }

  function getItem(uint256 index) public view returns (uint256) {
    return numbers[index];
  }

  function getAll() public view returns (uint256[] memory) {
    return numbers;
  }

  function getLength() public view returns (uint256) {
    return numbers.length;
  }
}
