const fs = require("fs");

function getPuzzleLines({ numeric = false } = {}) {
  const txt = fs.readFileSync("../inputs/01_input.txt", "utf-8");
  const lines = txt.split("\n");
  return numeric ? lines.map((n) => +n) : lines;
}

const input = getPuzzleLines();

const floorFinder = (inputStr) => {
  let upper = 0;
  let lower = 0;
  for (let i = 0; i < inputStr.length; i++) {
    inputStr[i] === ")" ? lower++ : upper++;
  }
  return upper - lower;
};

const basementPosition = (inputStr) => {
  let floor = 0;
  for (let i = 0; i < inputStr.length; i++) {
    inputStr[i] === "(" ? floor++ : floor--;
    if (floor === -1) {
      return i + 1;
    }
  }
};
