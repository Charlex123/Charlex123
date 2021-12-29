
// Make sure the MetaDefi contract is included by requireing it.
const MetaDefi = artifacts.require("MetaDefi");

// THis is an async function, it will accept the Deployer account, the network, and eventual accounts.
module.exports = async function (deployer, network, accounts) {
  // await while we deploy the MetaDefi
  await deployer.deploy(MetaDefi);
//   const MetaDefi = await MetaDefi.deployed()
};