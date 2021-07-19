import React from 'react';
import initWeb3 from './web3';
import { Container } from 'semantic-ui-react';
import { ADDRESS, ABI } from './advancedStorage';
import NumberForm from './components/NumberForm';

class App extends React.Component {
  state = {
    contract: undefined,
    inputVal: '',
    errorMessage: '',
    accounts: [],
    numbers: undefined,
    web3: undefined,
  };

  componentDidMount() {
    this.loadBlockchainData();
  }

  loadBlockchainData = async () => {
    let web3 = await initWeb3();
    const contract = new web3.eth.Contract(ABI, ADDRESS);
    const accounts = await web3.eth.getAccounts();
    const numbers = await contract.methods.getAll().call();
    this.setState(() => ({ contract, accounts, numbers, web3 }));
    console.log(this.state);
  };

  onChange = (e) => {
    this.setState(() => ({ inputVal: e.target.value, errorMessage: '' }));
  };

  addItem = async () => {
    try {
      await this.state.contract.methods
        .addItem(this.state.web3.utils.toBN(this.state.inputVal))
        .send({ from: this.state.accounts[0] });
    } catch (error) {
      this.setState(() => ({ errorMessage: error.message }));
    }

    const numbers = await this.state.contract.methods.getAll().call();
    this.setState(() => ({ ...this.state, numbers, inputVal: '' }));
  };

  onSubmit = async (e) => {
    e.preventDefault();

    this.addItem();
  };

  render() {
    return (
      <Container className="App" style={{ marginTop: '50px' }}>
        <h1>Advanced storage</h1>
        <h4>Welcome {this.state.accounts[0]}</h4>

        <div>
          <NumberForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            errorMessage={this.state.errorMessage}
            inputVal={this.state.inputVal}
          />
        </div>
        <div style={{ marginTop: '50px', borderTop: '1px solid #eee' }}></div>
        <ul>
          {this.state.numbers ? (
            this.state.numbers.map((number, i) => <li key={i}>{number}</li>)
          ) : (
            <h4>Add an item to begin</h4>
          )}
        </ul>
      </Container>
    );
  }
}

export default App;
