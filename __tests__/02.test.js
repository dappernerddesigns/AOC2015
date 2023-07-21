const WrappingStation = require("../challenges/02");

describe("Wrapper Calculator", () => {
  test("Ribbon calculator returns 34 for a box 2x3x4", () => {
    const calc = new WrappingStation();
    expect(calc.ribbonCalculator(2, 3, 4)).toBe(34);
    expect(calc.ribbonCalculator(1, 1, 10)).toBe(14);
  });
});
