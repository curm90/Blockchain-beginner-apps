pragma solidity ^0.5.1;

contract Crud {
   struct User {
       uint id;
       string name;
   }
   
   User[] public users;
   uint public nextId = 1;
   
   function createUser(string memory name) public {
       users.push(User(nextId, name));
       nextId++;
   }
   
   function getUser(uint id) public view returns (uint, string memory) {
        uint i = findUser(id);
        
        return (users[i].id, users[i].name);
   }
   
   function updateUser(uint id, string memory name) public {
       uint i = findUser(id);
       
       users[i].name = name;
   }
   
   function deleteUser(uint id) public {
       uint i = findUser(id);
       delete users[i];
   }
   
   function findUser(uint id) internal view returns(uint) {
       for (uint i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                return i;
            }
        }
        revert('User does not exist');
   }
}