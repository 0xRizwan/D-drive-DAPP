const hre = require("hardhat");
const ethers = require("ethers");

async function main() {
  const Ddrive = await hre.ethers.getContractFactory("Ddrive");
  const deployedDdrive = await Ddrive.deploy();

  await deployedDdrive.deployed();

  console.log( `Ddrive contract address: ${deployedDdrive.address}` );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
