// require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-verify"); // 该库和上面两个有冲突，如果运行 verify ，将上面两个注释掉。
const dotenv = require("dotenv");
dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: {
    version: "0.8.4", // 确保这里的版本与你的合约中的 pragma 声明一致
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    sepolia: {
      url: process.env.RPC_URL, // Sepolia 网络的 RPC URL
      accounts: [process.env.PRIVATE_KEY], // 私钥
      timeout: 200000,
    },
    ganache: {
      url: "http://127.0.0.1:8545",
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHSCANER_KEY,
    },
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true,
  },
};
