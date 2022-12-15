require('@nomicfoundation/hardhat-toolbox')
// require('dotenv').config()
require('dotenv').config({ path: '.env' })

// const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: '0.8.9',
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [PRIVATE_KEY],
    },
  },
  paths: {
    // will contain the compiled version of our smart contract in JSON format which is the contract ABI
    artifacts: './artifacts',
  },
}
