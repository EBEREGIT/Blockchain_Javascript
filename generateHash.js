(function generateHash() {
  let hash = "";
  let nonce = 0;

  while (hash.substring(0, 3) !== "000") {
    nonce++;
    hash = SHA256("man" + nonce).toString();
  }

  console.log(nonce);
  console.log(hash);
})();
