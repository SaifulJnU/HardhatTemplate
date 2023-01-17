require("@nomiclabs/hardhat-waffle");
//require('dotenv').config({ path: './.env.local' });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
})

//const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY

module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {

          url:"https://eth-goerli.g.alchemy.com/v2/spv7GhfJCJsx62P8Nx0csvN7O0zSM-T0",
          accounts: ["b0c6243ff61294e30471cfb684addb2fdbfd260011fc09c92ae67881e3176120"]

      // url: process.env.NEXT_PUBLIC_RPC_URL,
      // accounts: [privateKey]
    }
  },
  paths:{
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
