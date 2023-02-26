import { ethers } from 'ethers'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from './contractUtils'

const contractDetails = () => {
  // Creating a new provider
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  // Getting the signer
  const signer = provider.getSigner()
  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
  // Returning the contract
  return contract
}

export default contractDetails
