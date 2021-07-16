import React from 'react';
import web3 from './web3';
import { ADDRESS, ABI } from './advancedStorage';

class App extends React.Component {
  state = {
    contract: undefined,
  };

  componentDidMount() {
    this.loadBlockchainData();
  }

  loadBlockchainData = async () => {
    const contract = new web3.eth.Contract(ABI, ADDRESS);
    this.setState(() => ({ contract }));
  };

  render() {
    return (
      <div className="App">
        <h1>Advanced storage</h1>
      </div>
    );
  }
}

export default App;
