const { Blockchain, Transaction } = require("./blockchain");

let brentCoin = new Blockchain();
brentCoin.createTransaction(new Transaction("address1", "address2", 100));
brentCoin.createTransaction(new Transaction("address2", "address1", 50));

console.log("\n Starting the miner...");
brentCoin.minePendingTransactions("brents-address");

console.log(
  "\nBalance of Brent is ",
  brentCoin.getBalanceOfAddress("brents-address")
);

console.log("\n Starting the miner again...");
brentCoin.minePendingTransactions("brents-address");

console.log(
  "\nBalance of Brent is ",
  brentCoin.getBalanceOfAddress("brents-address")
);

// console.log(`Mining block 1...`);
// brentCoin.addBlock(new Block(1, "02/22/2021", { amount: 4 }));

// console.log(`Mining block 2...`);
// brentCoin.addBlock(new Block(2, "02/22/2021", { amount: 10 }));

// console.log(JSON.stringify(brentCoin, null, 4));
// console.log(`Is blockchain vaid? ` + brentCoin.isChainValid());

// // brentCoin.chain[1].data = { amount: 100 };

// console.log(`Is blockchain vaid? ` + brentCoin.isChainValid());
