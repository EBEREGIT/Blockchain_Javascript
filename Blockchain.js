const SHA256 = require("sha256");

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
  }

  createGenesisBlock() {
    return {
      index: 1,
      timestamp: Date.now,
      transactions: [],
      nonce: 0,
      hash: "hash",
      previousBlockHash: "previousBlockHash",
    };
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  generateHash(previousBlockHash, timestamp, pendingTransactions) {
    let hash = "";
    let nonce = 0;

    while (hash.substring(0, 3) !== "000") {
      nonce++;
      hash = SHA256(
        previousBlockHash +
          timestamp +
          JSON.stringify(pendingTransactions) +
          nonce
      ).toString();
    }

    return { hash, nonce };
  }

  createTransaction(amount, sender, recipient) {
    this.pendingTransactions.push({ amount, sender, recipient });
  }

  createBlock() {
    const timestamp = Date.now;
    const transactions = this.pendingTransactions;
    const previousBlockHash = this.getLastBlock().hash;
    const generateHash = this.generateHash(
      previousBlockHash,
      timestamp,
      transactions
    );

    const newBlock = {
      index: this.chain.length + 1,
      timestamp,
      transactions,
      nonce: generateHash.nonce,
      hash: generateHash.hash,
      previousBlockHash,
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
  }
}

module.exports = Blockchain;
