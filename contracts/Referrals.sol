// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "./MetaDefi.sol";

contract Owned {

  function owned() internal {
    owner = msg.sender;
  }

  address private owner;

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }
}

contract ReferralChain is Owned {

  struct Referrer {
    address addr;
    uint reward;
    bytes32 link;
    uint referredCount;
    mapping (bytes32 => bool) referred;
  }

  mapping (bytes32 => Referrer) private referrers;
  mapping (bytes32 => bool) private referred;
  mapping (address => uint) private pendingAward;

  uint private referredCount;
  uint private referrersCount;

  function getBalanceOfReferrer(bytes32 link) view public onlyOwner returns (uint256) {
    Referrer storage r = referrers[link];
    if (r.link == link) {
      address raddr = address(r.addr);
      if (raddr != address(0)) {
        return raddr.balance;
      }
    }

    return 0;
  }

  function getReferrersCount() view public onlyOwner returns (uint256) { return referrersCount; }

  // check if a given link is a valid referrer link
  function isReferrer(bytes32 link) view public onlyOwner returns (bool) { return referrers[link].link == link; }

  // get award value for a referrer link
  function getReferrerReward(bytes32 link) view public onlyOwner returns (uint) { return referrers[link].reward; }

  // get wallet address of a referrer link
  function getReferrerAddress(bytes32 link) view public onlyOwner returns (address) { return referrers[link].addr; }

  // check if a given link has already been paid
  function isAlreadyReferred(bytes32 link) view public onlyOwner returns (bool) { return referred[link] == true; }

  // add a new referrer link to our list
  function addReferrer(address addr, uint reward, bytes32 link) public onlyOwner returns (uint) {
    Referrer storage r = referrers[link];
    if (r.link == link) {
      return referrersCount;
    }

    r.addr = addr;
    r.reward = reward;
    r.link = link;
    r.referredCount = 0;
    referrersCount++;
    return referrersCount;
  }

  // remove a referrer link from our list
  function removeReferrer(bytes32 link) public onlyOwner returns (uint) {
    Referrer storage r = referrers[link];
    if (r.link == link) {
      r.addr = address(0);
      r.reward = 0;
      r.link = "";
      r.referredCount = 0;
      referrersCount--;
    }

    return referrersCount;
  }

  // give reward to a referrer
  function giveRewardToReferrer(bytes32 referrerLink, bytes32 referredLink) public onlyOwner returns (bool confirmation) {

    // check if this referredLink is already rewarded
    if (referred[referredLink] == true) {return false;}

    // find the referrer
    Referrer storage r = referrers[referrerLink];

    // check if this referrer is valid
    if (r.link != referrerLink) {return false;}

    //check if owner balance has enough funds to cover the r.reward
    if ( address(this).balance < r.reward) {return false;}

    // update this referred as already paid
    referred[referredLink] = true;
    referredCount++;

    // mark this referred as referred by this referrer
    r.referred[referredLink] = true;
    r.referredCount++;

    // send payment
    payable(address(r.addr)).transfer(r.reward);
  }
}