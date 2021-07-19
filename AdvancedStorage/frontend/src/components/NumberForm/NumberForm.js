import React from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';

const NumberForm = ({ onSubmit, onChange, errorMessage, inputVal }) => {
  return (
    <Form onSubmit={onSubmit} error={!!errorMessage}>
      <Form.Field>
        <label>Add item (number)</label>
        <Input
          value={inputVal}
          placeholder="Add new item..."
          onChange={onChange}
          type="number"
        ></Input>
      </Form.Field>
      <Button primary>Add</Button>
      <Message error header="Oops!" content={errorMessage}></Message>
    </Form>
  );
};

export default NumberForm;
