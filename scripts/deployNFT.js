const hre = require("hardhat");

async function main() {
  // 获取部署账户
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // 获取合约工厂
  const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");

  // 部署合约
  const roboPunksNFT = await RoboPunksNFT.deploy(); // 调用构造函数
  console.log("RoboPunksNFT deployed...");

  // 等待合约部署完成
  await roboPunksNFT.deployed();
  console.log("RoboPunksNFT deployed to:", roboPunksNFT.address);

  // 设置 withdrawWallet 地址（如果需要）
  // const withdrawWalletAddress = "0xa0799D325dC1f6C3E003104C41BC20CC20e3bCEc"; // 你的 withdrawWallet 地址
  // await roboPunksNFT.setWithdrawAddress(withdrawWalletAddress);
  // console.log("Withdraw address set to:", withdrawWalletAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
