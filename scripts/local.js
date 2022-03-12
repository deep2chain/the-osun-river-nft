const { ethers } = require("hardhat");

var chai = require('chai');
//use default BigNumber
chai.use(require('chai-bignumber')());
const { expect } = chai;
const contract = require("../artifacts/contracts/OsunRiverNFT.sol/TorNFT.json");
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // the hash of the smart contract to be used in minting this NFT
const tokenURI = "https://ipfs.io/ipfs/QmdZMtdApdeobM5iCRcWqAMByfG4No8tW4oheb7jQjKgTm";



async function createNFT(tokenURI) {
    const TOR = await ethers.getContractFactory("TorNFT",);
    var tor = new ethers.Contract(contractAddress,contract.abi);
    let [account1,account2] = await ethers.getSigners();
    await tor.connect(account1).createNFT(account1.address,tokenURI).then(function(hash) {
         console.log('Hash: ' + hash);
    });
}
createNFT(tokenURI);


// async function createNFTex(tokenURI) {
//     const TOR = await ethers.getContractFactory("TorNFT",);
//     var tor = new ethers.Contract(contractAddress,contract.abi);

//     // if (tor.deployed()) {
//     //     tor = await TOR.deploy();
//     // }

//     let [account1,account2] = await ethers.getSigners();

//     // walletPrivateKey = new Wallet(account1);
//     // walletMnemonic.address === walletPrivateKey.address
//     var privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
//     var wallet = new ethers.Wallet(privateKey);

//     // const provider = new ethers.providers.Web3Provider(window.ethereum);
//     // var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
//     const provider = new ethers.providers.JsonRpcProvider();//(i.e. ``http:/\/localhost:8545``)
//     // const provider = ethers.getDefaultProvider();
//     // signer = new ethers.VoidSigner(account1, provider);
//     const signer = await provider?.getSigner();

//     const nonce = await account1.nonce;
//     hexdata = ethers.utils.hexConcat([
//         '0x9f4f2a33', 
//         ethers.utils.defaultAbiCoder.encode(['address', 'string'], [account2.address, tokenURI])
//       ]);
//     const tx = {
//         from: account1.address, // your metamask public key
//         to: contractAddress, // the smart contract address we want to interact with
//         nonce: nonce, // nonce with the no of transactions from our account
//         gas: 1000000, // fee estimate to complete the transaction
//         data: hexdata,// tor.populateTransaction.createNFT(account2.address, tokenURI), // call the createNFT function from our OsunRiverNFT.sol file
//         // chainId: 1337,
//       };

//     // const signedtx = await signer?.signTransaction(tx);// not supported from 5.1.2
//     const signedtx = await wallet.signTransaction(tx);

//     // const signed = await (new Wallet(privateKey)).signTransaction(tx);
//     // walletMnemonic.signTransaction(tx)
    
//     provider.sendTransaction(signedtx).then(function(hash) {
//         console.log('Hash: ' + hash);
//         // Hash:
//     });
//     // wallet.sendTransaction(tx)
//     // await tor.connect(account1).createNFT(account1.address,tokenURI);
// }
// createNFTex(tokenURI)