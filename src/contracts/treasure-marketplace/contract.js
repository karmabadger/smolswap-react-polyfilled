import abi from './contract.json';
import { ethers } from 'ethers';

const getContract = (provider, address) => {
    return new ethers.Contract(address, abi, provider);
};

export default getContract;