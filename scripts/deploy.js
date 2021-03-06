// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Events = await hre.ethers.getContractFactory("Events");
  const greeterDeploy = await Events.deploy();

  // const Token = await hre.ethers.getContractFactory("Token");
  // const token = await Token.deploy();

  await greeterDeploy.deployed();
  // await token.deployed();

  console.log("Greeter deployed to:", greeterDeploy.address);
  // console.log("Token deployed to:", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
