import React from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';

const AddUserForm = ({ inputVal, onChange, onSubmit, errorMessage }) => {
  return (
    <Form onSubmit={onSubmit} error={!!errorMessage}>
      <Form.Field>
        <label>Add User</label>
        <Input
          value={inputVal}
          onChange={onChange}
          placeholder='Enter user name...'
        ></Input>
      </Form.Field>
      <Button primary>Add user</Button>
      <Message error header='Oops!' content={errorMessage}></Message>
    </Form>
  );
};

export default AddUserForm;
