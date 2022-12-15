const { ethers } = require('hardhat')
const fs = require('fs')

async function main() {
  // We get the contract to deploy
  const YouTube = await ethers.getContractFactory('YouTube')
  const youtube = await YouTube.deploy()

  await youtube.deployed()

  console.log('YouTube deployed to:', youtube.address)

  /* this code writes the contract addresses to a local */
  /* file named config.js that we can use in the app */
  fs.writeFileSync(
    './config.js',
    `
  export const contractAddress = "${youtube.address}"
  export const ownerAddress = "${youtube.signer.address}"
  export const contractAbi = "${youtube.abi}"
  `
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
