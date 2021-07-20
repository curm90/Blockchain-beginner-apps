import React, { Component } from 'react';
import { ABI, ADDRESS } from './utils/crud';
import getWeb3 from './utils/getWeb3';

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount() {
    this.loadBlockchainData();
  }

  loadBlockchainData = async () => {
    let web3 = await getWeb3();
    const instance = new web3.eth.Contract(ABI, ADDRESS);
    const accounts = web3.eth.getAccounts();
    this.setState(() => ({ web3, contract: instance, accounts }));
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 42</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;
