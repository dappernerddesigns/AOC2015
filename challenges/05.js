class NaughtyOrNice {
  constructor() {
    this.nice = 0;
  }
  vowelChecker(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let char in str) {
      if (vowels.includes(str[char])) {
        count++;
      }
    }
    return count >= 3;
  }
  doubleLetter(str) {
    let double = false;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        double = true;
      }
    }
    return double;
  }
  noBadStrings(str) {
    const bannedSubStrings = ["ab", "cd", "pq", "xy"];
    let badString = true;
    for (let i = 0; i < str.length; i++) {
      const pair = `${str[i]}${str[i + 1]}`;
      if (bannedSubStrings.includes(pair)) {
        badString = false;
      }
    }
    return badString;
  }
  niceCounter(strArray) {
    strArray.forEach((str) => {
      const checks = [
        this.vowelChecker(str),
        this.doubleLetter(str),
        this.noBadStrings(str),
      ];
      if (!checks.includes(false)) {
        this.nice++;
      }
    });
  }
}

const fs = require("fs");

function getPuzzleLines({ numeric = false } = {}) {
  const txt = fs.readFileSync("../inputs/05_input.txt", "utf-8");
  const lines = txt.split("\n");
  return numeric ? lines.map((n) => +n) : lines;
}

const input = getPuzzleLines();

const non = new NaughtyOrNice();
non.niceCounter(input);
console.log(non.nice);
module.exports = NaughtyOrNice;
