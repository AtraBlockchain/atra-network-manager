var AtraNetworkManager = artifacts.require("./AtraNetworkManager.sol");

module.exports = function(deployer) {
  deployer.deploy(AtraNetworkManager).then((instance)=>{
    console.log('Atra Network Manager Deployed!');
  });
};
