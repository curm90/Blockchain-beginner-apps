import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import getWeb3 from './utils/getWeb3';
import { ABI, ADDRESS } from './utils/crud';
import AddUserForm from './components/AddUserForm';

class App extends Component {
  state = {
    errorMessage: '',
    inputVal: '',
    web3: null,
    accounts: null,
    contract: null,
  };

  componentDidMount() {
    this.loadBlockchainData();
  }

  loadBlockchainData = async () => {
    let web3 = await getWeb3();
    const instance = new web3.eth.Contract(ABI, ADDRESS);
    const accounts = await web3.eth.getAccounts();
    this.setState(() => ({ web3, contract: instance, accounts }));
  };

  addUser = async () => {
    console.log('Form submitted');
  };

  onChange = (e) => {
    e.persist();
    console.log(e.target.value);
    console.log(this.state.inputVal);
    this.setState(() => ({ inputVal: e.target.value, errorMessage: '' }));
  };

  onSubmit = async (e) => {
    e.preventDefault();

    this.addUser();
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Container style={{ marginTop: '50px' }} className='App'>
        <h3>Welcome {this.state.accounts[0]}</h3>
        <AddUserForm
          onChange={this.onChange}
          inputVal={this.state.inputVal}
          onSubmit={this.onSubmit}
          errorMessage={this.state.errorMessage}
        />
      </Container>
    );
  }
}

export default App;
