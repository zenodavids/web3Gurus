// Import the necessary libraries
const { ethers } = require('hardhat')
const fs = require('fs')

// Declare the main function as an async function
async function main() {
  
  // Get the contract factory for the MoloContract
  const MoloContract = await ethers.getContractFactory('MoloContract')

  // Deploy the contract and assign it to a variable
  const moloContract = await MoloContract.deploy()

  // Wait for the contract to be deployed and confirmed
  await moloContract.deployed()

  // 0x4F209047Aa3644693D4CB8A2123D06CA2Dd7642d

  // Log the address of the deployed contract to the console
  console.log('MoloContract deployed to:', moloContract.address)

  // Write the contract address, owner address, and ABI to a config file
  fs.writeFileSync(
    './config.js',
    `
  export const contractAddress = "${moloContract.address}"
  export const ownerAddress = "${moloContract.signer.address}"
  export const contractAbi = "${moloContract.abi}"
  `
  )
}

// Call the main function, then exit the process with exit code 0 if successful
// If an error occurs, log it to the console and exit the process with exit code 1
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
