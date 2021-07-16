import Web3 from 'web3';

let web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

export default web3;

// function initWeb3() {
// return new Promise((resolve, reject) => {
//   // Case 1: old metamask is present
//   if (typeof window.web3 !== 'undefined') {
//     return resolve(new Web3(window.web3.currentProvider()));
//   }
//   // Case 2: new metamask is present
//   if (typeof window.ethereum !== 'undefined') {
//     window.ethereum
//       .enable()
//       .then(() => {
//         resolve(new Web3(window.ethereum));
//       })
//       .catch((err) => {
//         reject(err);
//       });
//     return;
//   }
//   // Case 3: no metamask present just connect to Ganache
//   resolve(new Web3('http://localhost:9545'));
// });
// }

// export default initWeb3;
