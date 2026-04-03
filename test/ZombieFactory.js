const { expect } = require("chai");

describe("ZombieFactory", function () {
  it("Should create a new zombie", async function () {
    const ZombieFactory = await ethers.getContractFactory("ZombieFactory");
    const zombieFactory = await ZombieFactory.deploy();
    await zombieFactory.deployed();

    await zombieFactory.createRandomZombie("Shrijeet");
    const zombie = await zombieFactory.zombies(0);
    expect(zombie.name).to.equal("Shrijeet");
  });
});
