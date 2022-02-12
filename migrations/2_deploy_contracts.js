const StarNotary = artifacts.require("StarNotary");

module.exports = function(deployer) {
  deployer.deploy(StarNotary, "LianaGNFT", "LGNFT", 1);
};
