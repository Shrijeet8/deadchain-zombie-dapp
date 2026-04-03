import hre from "hardhat";

async function main() {
  const ZombieFactory = await hre.ethers.getContractFactory("ZombieFactory");
  const zombieFactory = await ZombieFactory.deploy();

  await zombieFactory.waitForDeployment(); // 🔥 v6 syntax

  console.log("ZombieFactory deployed to:", await zombieFactory.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
