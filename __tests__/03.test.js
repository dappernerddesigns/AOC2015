const { PresentTracker, TeamTracker } = require("../challenges/03");

describe("Present Tracker", () => {
  test("move method > updates position to x 1", () => {
    const track = new PresentTracker();
    track.move(">");
    expect(track.xPos).toBe(1);
  });
  test("delivery method updates the deliveredCount property", () => {
    const track = new PresentTracker();
    track.move(">");
    track.delivery();
    expect(track.deliveryCount).toBe(2);
  });
  test("totalDeliveries method traverses a string input and returns a count of unique deliveries", () => {
    const track = new PresentTracker();
    const input = "^>v<";
    track.totalDeliveries(input);
    expect(track.deliveryCount).toBe(4);
  });
  test("totalDeliveries correctly counts a repeating string of instructions", () => {
    const track = new PresentTracker();
    const input = "^v^v^v^v";
    track.totalDeliveries(input);

    expect(track.deliveryCount).toBe(2);
  });
});

describe("Team tracker", () => {
  test("move method with an input of ^, and santa moves santa only", () => {
    const team = new TeamTracker();
    team.move("^", "santa");
    expect(team.santa).toEqual({ x: 0, y: 1 });
  });
  test("move method with input of >, and robot moves robot only", () => {
    const team = new TeamTracker();
    team.move(">", "robot");
    expect(team.robot).toEqual({ x: 1, y: 0 });
  });
  test("totalDeliveries method with an input of ^v moves both santa and the robot", () => {
    const team = new TeamTracker();
    team.totalDeliveries("^v");
    expect(team.santa).toEqual({ x: 0, y: 1 });
    expect(team.robot).toEqual({ x: 0, y: -1 });
  });
  test("delivery method updates deliveredHouses object, deliveryCount reflects the object size", () => {
    const team = new TeamTracker();
    team.delivery("santa");
    expect(team.deliveryCount()).toBe(1);
  });
  test("totalDeliveries method updates delivery count to 3 when passed ^v", () => {
    const team = new TeamTracker();
    team.totalDeliveries("^v");
    expect(team.deliveryCount()).toBe(3);
  });
  test("totalDeliveries method returns 11 when passed ^v^v^v^v^v", () => {
    const team = new TeamTracker();
    const teamTwo = new TeamTracker();
    team.totalDeliveries("^v^v^v^v^v");
    console.log(team);
    expect(team.deliveryCount()).toBe(11);

    teamTwo.totalDeliveries("^>v<");
    expect(teamTwo.deliveryCount()).toBe(3);
  });
});
