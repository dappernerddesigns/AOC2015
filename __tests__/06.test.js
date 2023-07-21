const xmasLightsInstructions = require("../challenges/06");

const nineByNine = [
  { x: 0, y: 0, on: false },
  { x: 1, y: 1, on: false },
  { x: 2, y: 2, on: false },
  { x: 3, y: 3, on: false },
  { x: 4, y: 4, on: false },
  { x: 5, y: 5, on: false },
  { x: 6, y: 6, on: false },
  { x: 7, y: 7, on: false },
  { x: 8, y: 8, on: false },
];

describe("Christmas Lights", () => {
  test("When passed the string 'turn on 0,0 through 8,8' returns an object containing the startX, startY, endX, endY and string of instruction", () => {
    const actual = xmasLightsInstructions("turn on 0,0 through 8,8");
    const expected = {
      startX: 0,
      startY: 0,
      endX: 8,
      endY: 8,
      instruction: "turn on",
    };
    expect(actual).toEqual(expected);
  });
});
