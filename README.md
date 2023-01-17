# Hardhat Template

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

# Setup

1. Install harthat
```npm i hardhat```
2. Select project type
```npx hardhat```
3. Install others packages
```npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai```
4. In the hardhat config file just copy and paste the template and replace your own api link and metamsk private key (mention the testnet name)
5. In the Scripts folder you will find the deploy.js file where you need to use this template and change the Contract name(by your own contract) (if in your contract have any constractor which take string then pass any string to it)

# To compile the contract
In the command line write
```npx hardhat compile```

# To deploy the contract
In the command line write
```npx hardhat run scripts/deploy.js```


