require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config({ path: '.env' })

const PRIVATE_KEY = process.env.PRIVATE_KEY
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY
// const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL

module.exports = {
  solidity: '0.8.9',
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
}
