const Crud = artifacts.require('Crud');

contract('Crud', async () => {
  let crud;

  beforeEach(async () => {
    crud = await Crud.deployed();
  });

  it('should create a new user', async () => {
    const name = 'Liam';
    await crud.createUser(name);
    const user = await crud.getUser(1);
    assert.equal(user[0].toNumber(), 1);
    assert.equal(user[1], name);
  });

  it('should update a user', async () => {
    const updatedName = 'Mollie';
    await crud.updateUser(1, updatedName);
    const user = await crud.getUser(1);
    assert.equal(user[1], updatedName);
  });

  it('should throw an error if the user does not exist', async () => {
    try {
      const updatedName = 'Jeff';
      await crud.updateUser(2, updatedName);
    } catch (error) {
      assert(error.message.includes('User does not exist'));
      return;
    }
    assert(false);
  });

  it('should delete a user', async () => {
    await crud.deleteUser(1);

    try {
      await crud.getUser(1);
    } catch (error) {
      assert(error.message.includes('User does not exist'));
      return;
    }

    assert(false);
  });

  it('should not delete a non existing user', async () => {
    try {
      await crud.deleteUser(10);
    } catch (error) {
      assert(error.message.includes('User does not exist'));
      return;
    }

    assert(false);
  });
});
