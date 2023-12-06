require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://165.232.134.78:8545',
      chainId: 1334949,
      accounts: ['fc53f4c90bd288833d4b005f04dbddbd4952627e93b215753bc75e44ddcf0966'],
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
};