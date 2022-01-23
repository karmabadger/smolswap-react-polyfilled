import abi from './contract.abi.js';
import { ethers } from 'ethers';

const getContract = (provider, address) => {
    return new ethers.Contract(address, abi, provider);
};

export default getContract;