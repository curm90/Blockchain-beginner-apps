const AdvancedStorage = artifacts.require('AdvancedStorage');

contract('AdvancedStorage', async () => {
  let instance = null;

  beforeEach(async () => {
    instance = await AdvancedStorage.deployed();
  });

  it('should add an item to the numbers array', async () => {
    const numToAdd = 10;
    await instance.addItem(numToAdd);
    const result = await instance.numbers(0);
    assert.equal(result.toNumber(), numToAdd);
  });

  it('should get the element from numbers array at index', async () => {
    const numToAdd = 7;
    await instance.addItem(numToAdd);
    const result = await instance.getItem(1);
    assert.equal(result.toNumber(), numToAdd);
  });

  it('should get the numbers array', async () => {
    const rawNumbers = await instance.getAll();
    const numbers = rawNumbers.map((num) => num.toNumber());
    const currentArrayState = [10, 7];
    assert.deepEqual(numbers, currentArrayState);
  });

  it('should return the length of the array', async () => {
    const instance = await AdvancedStorage.deployed();
    const length = await instance.getLength();
    assert.equal(length.toNumber(), 2);
  });
});
