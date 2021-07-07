const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", async (accounts) => {
  it("Should return the string Hello World!", async () => {
    const instance = await HelloWorld.deployed();
    const result = await instance.helloWorld.call();
    const resultStr = "Hello World!";

    assert(result == resultStr);
  });
});
