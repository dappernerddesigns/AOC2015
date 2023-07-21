const md5 = require("md5");

const coinMiner = (str) => {
  let found = false;
  let number = 1;

  while (found === false) {
    const hash = md5(str + number);
    if (hash.startsWith("000000")) {
      found = true;
    } else {
      number++;
    }
  }
  return number;
};

module.exports = coinMiner;
