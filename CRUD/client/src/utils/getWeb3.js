import Web3 from 'web3';

function getWeb3() {
  return new Promise((resolve, reject) => {
    // Case 1: new metamask is present
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum
        .enable()
        .then(() => {
          resolve(new Web3(window.ethereum));
        })
        .catch((err) => {
          reject(err);
        });
      return;
    }
    // Case 2: old metamask is present
    if (typeof window.web3 !== 'undefined') {
      return resolve(new Web3(window.web3.currentProvider()));
    }

    // Case 3: no metamask present just connect to Ganache
    resolve(new Web3('http://localhost:9545'));
  });
}

export default getWeb3;
