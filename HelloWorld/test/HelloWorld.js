const HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', async () => {
  it('Should return the string Hello World!', async () => {
    const instance = await HelloWorld.deployed();
    const result = await instance.helloWorld.call();
    const resultStr = 'Hello World!';

    assert.equal(result, resultStr);
  });
});
