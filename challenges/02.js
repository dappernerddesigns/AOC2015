const fs = require("fs");

function getPuzzleLines({ numeric = false } = {}) {
  const txt = fs.readFileSync("../inputs/02_inputs.txt", "utf-8");
  const lines = txt.split("\n");
  return numeric ? lines.map((n) => +n) : lines;
}

const input = getPuzzleLines();

class WrappingStation {
  constructor() {
    this.paperInFeet = 0;
    this.ribbonInFeet = 0;
  }
  inputFormat(arr) {
    const numberArrs = arr.map((str) => {
      return str.split("x");
    });

    return numberArrs.map((dims) => {
      const output = [];
      for (let i = 0; i < dims.length; i++) {
        output.push(Number(dims[i]));
      }
      return output;
    });
  }
  wrapperCalculator(w, h, d) {
    const sideOne = w * h;
    const sideTwo = h * d;
    const sideThree = w * d;
    const surfaceArea = sideOne * 2 + sideTwo * 2 + sideThree * 2;
    const smallestArea = Math.min(sideOne, sideTwo, sideThree);

    return surfaceArea + smallestArea;
  }
  megaCalculator(arr) {
    let paperFt = 0;
    let ribbonFt = 0;
    const dims = this.inputFormat(arr);
    for (let i = 0; i < dims.length; i++) {
      paperFt += this.wrapperCalculator(dims[i][0], dims[i][1], dims[i][2]);
      ribbonFt += this.ribbonCalculator(dims[i][0], dims[i][1], dims[i][2]);
    }
    this.paperInFeet = paperFt;
    this.ribbonInFeet = ribbonFt;
  }
  ribbonCalculator(w, h, d) {
    const perimeterOne = (w + h) * 2;
    const perimeterTwo = (h + d) * 2;
    const perimeterThree = (w + d) * 2;
    const smallestPerimeter = Math.min(
      perimeterOne,
      perimeterTwo,
      perimeterThree
    );
    const bowFt = w * h * d;
    return smallestPerimeter + bowFt;
  }
}

const wrap = new WrappingStation();
wrap.megaCalculator(input);
console.log(wrap);
module.exports = WrappingStation;
