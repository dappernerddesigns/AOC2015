const coinMiner = require("../challenges/04.js");

describe.skip("Coin miner", () => {
  test("When passed a key of abcdef returns 609043", () => {
    expect(coinMiner("abcdef")).toBe(609043);
  });
  test("When passed a key of pqrstuv returns 1048970", () => {
    expect(coinMiner("pqrstuv")).toBe(1048970);
  });
});
console.log(coinMiner("ckczppom"));
