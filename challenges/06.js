const lightArray = () => {
  const lights = [];
  let x = 0;
  let y = 0;
  for (let i = 0; i < 1000; i++) {
    lights.push({ x, y, on: false });
    x++;
    y++;
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

module.exports = xmasLightsInstructions;
