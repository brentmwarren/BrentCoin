const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "4607e57726675fc43efb7d3f8d62526b953238242a9de057b306a9e7ea5584ab"
);
const myWalletAddress = myKey.getPublic("hex");

const brentCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "address2", 100);
tx1.signTransaction(myKey);
brentCoin.addTransaction(tx1);

// brentCoin.createTransaction(new Transaction("address1", "address2", 100));
// brentCoin.createTransaction(new Transaction("address2", "address1", 50));

console.log("\n Starting the miner...");
brentCoin.minePendingTransactions(myWalletAddress);

console.log(
  "\nBalance of Brent is ",
  brentCoin.getBalanceOfAddress(myWalletAddress)
);

console.log("\n Starting the miner again...");
brentCoin.minePendingTransactions(myWalletAddress);

console.log(
  "\nBalance of Brent is ",
  brentCoin.getBalanceOfAddress(myWalletAddress)
);

// brentCoin.chain[1].transactions[0].amount = 1;

console.log("is chain valid?", brentCoin.isChainValid());

// console.log(`Mining block 1...`);
// brentCoin.addBlock(new Block(1, "02/22/2021", { amount: 4 }));

// console.log(`Mining block 2...`);
// brentCoin.addBlock(new Block(2, "02/22/2021", { amount: 10 }));

// console.log(JSON.stringify(brentCoin, null, 4));
// console.log(`Is blockchain vaid? ` + brentCoin.isChainValid());

// // brentCoin.chain[1].data = { amount: 100 };

// console.log(`Is blockchain vaid? ` + brentCoin.isChainValid());
