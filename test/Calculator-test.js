const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('add', function () {
    it("Should have an addition", async function (){
		const Calculator = await ethers.getContractFactory("Calculator")
		const calculator = await Calculator.deploy()

		await calculator.deployed()
		expect(await calculator.add(2,2)).to.equal(4)
    })
})
describe('mul', function () {
    it("Should have a multiplication", async function (){
		const Calculator = await ethers.getContractFactory('Calculator')
		const calculator = await Calculator.deploy()

		await calculator.deployed()
		expect(await calculator.mul(2,3)).to.equal(6)
    })
})
describe('sum', function () {
    it("Should have a sustraction", async function (){
		const Calculator = await ethers.getContractFactory("Calculator")
		const calculator = await Calculator.deploy()

		await calculator.deployed()
		expect(await calculator.sum(5,2)).to.equal(3)
    })
})
describe('div', function () {
    it("Should have a division)", async function (){
		const Calculator = await ethers.getContractFactory("Calculator")
		const calculator = await Calculator.deploy()

		await calculator.deployed()
		expect(await calculator.div(8,4)).to.equal(2)
    })
})
describe('mod', function () {
    it("Should have a modulo (rest)", async function (){
		const Calculator = await ethers.getContractFactory("Calculator")
		const calculator = await Calculator.deploy()

		await calculator.deployed()
		expect(await calculator.mod(5,2)).to.equal(1)
    })
})