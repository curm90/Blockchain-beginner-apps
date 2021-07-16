import AdvancedStorage from './build/contracts/AdvancedStorage.json';

const deploymentKey = Object.keys(AdvancedStorage.networks)[0];

export const ABI = AdvancedStorage.abi;
export const ADDRESS = AdvancedStorage.networks[deploymentKey].address;
