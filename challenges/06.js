const lightArray = (length, height) => {
  const lights = [];

  for (let x = 0; x < length; x++) {
    for (let y = 0; y < height; y++) {
      lights.push({ x, y, on: false });
    }
  }
  return lights;
};

const xmasLightsInstructions = (instr) => {
  const instrArray = instr.split(" ");
  const startArr = instrArray[instrArray.length - 3].split(",");
  const endArr = instrArray[instrArray.length - 1].split(",");
  const startX = Number(startArr[0]);
  const startY = Number(startArr[1]);
  const endX = Number(endArr[0]);
  const endY = Number(endArr[1]);

  const instruction = instrArray.slice(0, instrArray.length - 3).join(" ");
  const directionsObj = { startX, startY, endX, endY, instruction };
  return directionsObj;
};

const lights = (instructionObj, lightArr, length) => {
  const { startX, startY, endX, endY, instruction } = instructionObj;
  for (let x = startX; x <= endX; x++) {
    for (let y = startY; y <= endY; y++) {
      const index = x * length + y; // Calculate the 1D index based on 2D coordinates
      switch (instruction) {
        case "turn on":
          lightArr[index].on = true;
          break;
        case "turn off":
          lightArr[index].on = false;
          break;
        case "toggle":
          lightArr[index].on = !lightArr[index].on;
          break;
      }
    }
  }
  return lightArr;
};
const instructionProgram = (instrArr, lightArr) => {
  instrArr.forEach((step) => {
    const instrObj = xmasLightsInstructions(step);
    lights(instrObj, lightArr, lightArr.length);
  });
  const lit = lightArr.filter((light) => {
    if (light.on) {
      return light;
    }
  });

  return lit.length;
};

const fs = require("fs");

function getPuzzleLines({ numeric = false } = {}) {
  const txt = fs.readFileSync("../inputs/06_input.txt", "utf-8");
  const lines = txt.split("\n");
  return numeric ? lines.map((n) => +n) : lines;
}

const instrArr = getPuzzleLines();
const lightGrid = lightArray(1000, 1000);
console.log(instructionProgram(instrArr, lightGrid));

module.exports = {
  xmasLightsInstructions,
  lights,
  lightArray,
  instructionProgram,
};
