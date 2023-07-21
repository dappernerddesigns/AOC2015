const NaughtyOrNice = require("../challenges/05");

describe("Naughty or Nice", () => {
  const non = new NaughtyOrNice();
  test("Vowel checker returns false if there are less than three vowels", () => {
    expect(non.vowelChecker("abe")).toBe(false);
  });
  test("Vowel checker returns true for strings with three vowels in any order", () => {
    expect(non.vowelChecker("ugknbfddgicrmopn")).toBe(true);
    expect(non.vowelChecker("aaa")).toBe(true);
  });
  test("Double letter returns true if string contains at least one letter twice in a row", () => {
    expect(non.doubleLetter("aa")).toBe(true);
    expect(non.doubleLetter("abc")).toBe(false);
    expect(non.doubleLetter("ugknbfddgicrmopn")).toBe(true);
  });
  test("No bad strings returns false if string contains ab, cd, pq, or xy", () => {
    expect(non.noBadStrings("ab")).toBe(false);
    expect(non.noBadStrings("cd")).toBe(false);
    expect(non.noBadStrings("pq")).toBe(false);
    expect(non.noBadStrings("xy")).toBe(false);
    expect(non.noBadStrings("haegwjzuvuyypxyu")).toBe(false);
  });
  test("No bad strings returns true if string does not contain any banned substrings", () => {
    expect(non.noBadStrings("aaa")).toBe(true);
    expect(non.noBadStrings("aeiouaeiouaeiou")).toBe(true);
    expect(non.noBadStrings("ugknbfddgicrmopn")).toBe(true);
  });
  test("Nice counter updates the nice property to 1 when passed an array containing a single string that meets the three requirements", () => {
    non.niceCounter(["aaa"]);
    expect(non.nice).toBe(1);
  });
  test("Nice counter updates the nice property when passed a longer array", () => {
    non.niceCounter([
      "ugknbfddgicrmopn",
      "aaa",
      "jchzalrnumimnmhp",
      "haegwjzuvuyypxyu",
      "dvszwmarrgswjxmb",
    ]);
    // Includes previous count
    expect(non.nice).toBe(3);
  });
});
