const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); //hre = Hardhat Run Environment. Contains all functionality that hardhat exposes when running a task/test/script
  const waveContract = await waveContractFactory.deploy(); // creats local ETH network for this contract, after running the script it destroys that network
  await waveContract.deployed();
  console.log("Contract deployed to:", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();