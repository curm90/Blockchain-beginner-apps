import React from 'react';
import Web3 from 'web3';
import { Button, Container } from 'semantic-ui-react';
import { ADDRESS, ABI } from './helloWorld';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  state = {
    account: '',
    message: '',
    contract: undefined,
  };

  componentDidMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    let web3 = new Web3(Web3.givenProvider || 'http://localhost:9545');
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(ABI, ADDRESS);
    this.setState(() => ({ account: accounts[0], contract }));
  }

  helloWorld = async () => {
    const message = await this.state.contract.methods.helloWorld().call();
    this.setState(() => ({ message }));
  };

  render() {
    return (
      <Container style={{ marginTop: '10px' }} className="App">
        <h4>Welcome account: {this.state.account}</h4>
        <Button primary onClick={this.helloWorld}>
          Click me
        </Button>
        {this.state.message && <h5>This is from my smart contract. Wow!</h5>}
        <h3>{this.state.message}</h3>
      </Container>
    );
  }
}

export default App;
