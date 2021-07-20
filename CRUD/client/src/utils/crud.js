import Crud from '../contracts/Crud.json';

const deploymentKey = Object.keys(Crud.networks)[0];

export const ABI = Crud.abi;
export const ADDRESS = Crud.networks[deploymentKey].address;
