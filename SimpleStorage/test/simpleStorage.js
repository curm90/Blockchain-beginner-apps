const SimpleStorage = artifacts.require('SimpleStorage');

contract('SimpleStorage', async () => {
  it('should set the value of the data variable', async () => {
    const instance = await SimpleStorage.deployed();
    const newVal = 'I love Ethereum';
    await instance.set(newVal);
    const result = await instance.get();
    assert.equal(result, newVal);
  });
});
