const { assert } = require("chai");

const MetaDefi = artifacts.require("MetaDefi.sol");

contract("MetaDefi", async accounts => {
it('total supply', async () => {
    MetadefiToken = await MetaDefi.deployed();
    let totalSupply = await MetadefiToken.totalSupply();
    assert.equal(BigInt(totalSupply),500000000000000000,"initial total supply 500,0000000")
})

it('name', async () => {
    MetadefiToken = await MetaDefi.deployed();
    let name = await MetadefiToken.name();
    assert.equal(name,"MetaDefi","token name")
})

it("transfering tokens", async() => {
    MetadefiToken = await MetaDefi.deployed();

    // Grab initial balance
    let initial_balance = await MetadefiToken.balanceOf(accounts[1]);

    // transfer tokens from account 0 to 1 
    await MetadefiToken.transfer(accounts[1], 100);
    
    let after_balance = await MetadefiToken.balanceOf(accounts[1]);

    assert.equal(after_balance.toNumber(), initial_balance.toNumber()+100, "Balance should have increased on reciever")

    // We can change the msg.sender using the FROM value in function calls.
    let account2_initial_balance = await MetadefiToken.balanceOf(accounts[2]);

    await MetadefiToken.transfer(accounts[2], 20, { from: accounts[1]});
    // Make sure balances are switched on both accounts
    let account2_after_balance = await MetadefiToken.balanceOf(accounts[2]);
    let account1_after_balance = await MetadefiToken.balanceOf(accounts[1]);

    assert.equal(account1_after_balance.toNumber(), after_balance.toNumber()-20, "Should have reduced account 1 balance by 20");
    assert.equal(account2_after_balance.toNumber(), account2_initial_balance.toNumber()+20, "Should have givne accounts 2 20 tokens");


    // Try transfering too much
    // try {
    //     await MetadefiToken.transfer(accounts[2], 200000, { from:accounts[1]});
    // }catch(error){
    //     assert.equal(error.reason, "MetadefiToken: cant transfer more than your account holds");
    // }
   
})
} )

// https://www.namecheap.com/support/knowledgebase/article.aspx/157/22/do-you-have-any-server-resource-restrictions/

// https://www.namecheap.com/support/knowledgebase/article.aspx/10047/2182/how-to-work-with-nodejs-app/

// https://www.namecheap.com/legal/hosting/aup/