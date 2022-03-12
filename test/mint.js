// https://learn.figment.io/tutorials/create-nft-smart-contract-with-hardhat
// const { expect } = require('chai');
const { ethers } = require("hardhat");

var chai = require('chai');
//use default BigNumber
chai.use(require('chai-bignumber')());
const { expect } = chai;
//use custom BigNumber
// chai.use(require('chai-bignumber')(BigNumber));

describe("Tor Smart Contract Tests", function() {

    let tor;
    
    this.beforeEach(async function() {
        // This is executed before each test
        // Deploying the smart contract
        const TOR = await ethers.getContractFactory("TorNFT",);
        tor = await TOR.deploy();
    })

    it("NFT is minted successfully", async function() {
        let [account1] = await ethers.getSigners();

        // expect(await tor.balanceOf(account1.address)).to.equal(0);
        
        const tokenURI = "https://opensea-creatures-api.herokuapp.com/api/creature/1"
        const tx = await tor.connect(account1).createNFT(account1.address,tokenURI);
        console.log("balance",(await tor.balanceOf(account1.address)).toString());
        // expect((await tor.balanceOf(account1.address)).toString()).to.equal('1');
        expect((await tor.balanceOf(account1.address)).toNumber()).to.deep.equal(1);
    })

    it("tokenURI is set sucessfully", async function() {
        let [account1, account2,account3,account4] = await ethers.getSigners();

        const tokenURI_1 = "https://opensea-creatures-api.herokuapp.com/api/creature/1"
        const tokenURI_2 = "https://opensea-creatures-api.herokuapp.com/api/creature/2"

        const tx1 = await tor.connect(account1).createNFT(account1.address,tokenURI_1);
        const tx2 = await tor.connect(account1).createNFT(account1.address,tokenURI_2);
        const tx3 = await tor.connect(account1).createNFT(account2.address,"tokenURI_2");

        expect((await tor.balanceOf(account1.address)).toString()).to.equal('2');
        expect((await tor.balanceOf(account2.address)).toString()).to.equal('1');
        expect((await tor.balanceOf(account3.address)).toString()).to.equal('0');
        // expect(await tor.tokenURI(1)).to.equal(tokenURI_2);

    })

})