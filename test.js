const Blockchain = require("./Blockchain");

let introCoin = new Blockchain;

introCoin.createTransaction(100, "fdhasgdhjalSKVD", "RTYTFYGCAUHPISODC");
introCoin.createBlock();

introCoin.createTransaction(60, "dfcjdgackshdj", "hcjsvc`kdghasjds");
introCoin.createBlock();

introCoin.createTransaction(760, "vjvuhafkfsblvh`", "hcjsvuctrycfwGHE");


console.log(introCoin);