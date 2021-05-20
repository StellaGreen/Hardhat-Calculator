
const hre = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    const Calculator = await hre.ethers.getContractFactory("Calculator");
    const calculator = await Calculator.deploy(5,2);

    await calculator.deployed();

    console.log("Calculator deployed to", calculator.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});