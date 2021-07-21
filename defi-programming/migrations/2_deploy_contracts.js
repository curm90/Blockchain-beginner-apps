const Dai = artifacts.require('Dai');
const MyDefiProject = artifacts.require('MyDefiProject');

module.exports = async function (deployer, _, accounts) {
  await deployer.deploy(Dai);

  const dai = await Dai.deployed();
  await deployer.deploy(MyDefiProject, dai.address);

  const myDefiProject = await MyDefiProject.deployed();
  await dai.faucet(myDefiProject.address, 100);
  await myDefiProject.foo(accounts[1], 100);

  const senderBalance = await dai.balanceOf(myDefiProject.address);
  const recipientBalance = await dai.balanceOf(accounts[1]);

  console.log('Sender', senderBalance.toString());
  console.log('Recipient', recipientBalance.toString());

  // Use Kovan faucet to get some Kovan Ether
  // Use Oasis interface to get some Dai
  // In migration script: deploy smart contract (MyDefiProject) - Will need the Dai token address deployed on Kovan
  // Send this smart contract some Dai
  // Execute the foo function of smart contract - Edit migration file
};
