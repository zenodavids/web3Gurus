import { ethers } from 'ethers'
import { NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI } from '../constants'

export default function getContract() {
  // Creating a new provider
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  // Getting the signer
  const signer = provider.getSigner()
  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(
    NFT_CONTRACT_ADDRESS,
    NFT_CONTRACT_ABI,
    signer
  )
  // Returning the contract
  return contract
}
