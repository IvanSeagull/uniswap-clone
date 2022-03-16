require('@nomiclabs/hardhat-waffle');
const { url, account } = require('../config');
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: url,
      accounts: [account],
    },
  },
};
