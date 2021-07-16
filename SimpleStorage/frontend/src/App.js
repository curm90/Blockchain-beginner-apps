import React from 'react';
import Web3 from 'web3';
import { Form, Button, Container, Input, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { ADDRESS, ABI } from './simpleStorage';

class App extends React.Component {
  state = {
    contract: undefined,
    inputVal: '',
    newMessage: '',
    account: '',
    loading: false,
    errorMessage: '',
  };

  componentDidMount() {
    this.loadBlockchainData();
  }

  loadBlockchainData = async () => {
    let web3 = new Web3(Web3.givenProvider || 'http://localhost:9545');
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(ABI, ADDRESS);
    this.setState(() => ({ account: accounts[0], contract }));
  };

  onChange = (e) => {
    this.setState(() => ({ inputVal: e.target.value, errorMessage: '' }));
  };

  onSubmit = async (e) => {
    e.preventDefault();

    try {
      await this.state.contract.methods
        .set(this.state.inputVal)
        .send({ from: this.state.account });

      this.setState(() => ({ inputVal: '', newMessage: '' }));
    } catch (error) {
      this.setState(() => ({ errorMessage: error.message }));
    }
  };

  getMessage = async () => {
    this.setState(() => ({ errorMessage: '' }));
    const message = await this.state.contract.methods.get().call();
    this.setState(() => ({ newMessage: message }));
  };

  render() {
    return (
      <Container style={{ marginTop: '20px' }} className="App">
        <h1>Simple Storage</h1>
        <h4>Welcome {this.state.account}</h4>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>New data (Number)</label>
            <Input
              type="number"
              placeholder="Enter new message..."
              value={this.state.inputVal}
              onChange={this.onChange}
            ></Input>
          </Form.Field>
          <Button primary>Submit</Button>
          <Message
            error
            header="Oops!"
            content={this.state.errorMessage}
          ></Message>
        </Form>
        <div style={{ marginTop: '50px', borderTop: '1px solid #ddd' }}></div>
        <Button style={{ marginTop: '15px' }} onClick={this.getMessage}>
          Get message
        </Button>
        {this.state.newMessage && (
          <Message>data: {this.state.newMessage}</Message>
        )}
      </Container>
    );
  }
}

export default App;
