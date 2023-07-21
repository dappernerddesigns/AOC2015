class PresentTracker {
  constructor() {
    this.xPos = 0;
    this.yPos = 0;
    this.moves = {
      ">": () => this.xPos++,
      "<": () => this.xPos--,
      "^": () => this.yPos++,
      v: () => this.yPos--,
    };
    this.deliveredHouses = new Set();
    this.start = this.deliveredHouses.add(`${this.xPos}${this.yPos}`);
    this.deliveryCount = 0;
  }
  move(direction) {
    this.moves[direction]();
  }
  delivery() {
    this.deliveredHouses.add(`${this.xPos}${this.yPos}`);
    this.deliveryCount = this.deliveredHouses.size;
  }

  totalDeliveries(directions) {
    for (let i = 0; i < directions.length; i++) {
      this.move(directions[i]);
      this.delivery();
    }
  }
}

//* Part Two
class TeamTracker {
  constructor() {
    this.santa = { x: 0, y: 0 };
    this.robot = { x: 0, y: 0 };

    this.moves = {
      ">": (courier) => (courier === "santa" ? this.santa.x++ : this.robot.x++),
      "<": (courier) => (courier === "santa" ? this.santa.x-- : this.robot.x--),
      "^": (courier) => (courier === "santa" ? this.santa.y++ : this.robot.y++),
      v: (courier) => (courier === "santa" ? this.santa.y-- : this.robot.y--),
    };
    this.deliveredHouses = { "00": 1 };
    this.deliveryCount = () => Object.keys(this.deliveredHouses).length;
  }
  move(direction, courier) {
    this.moves[direction](courier);
  }
  delivery(courier) {
    for (let house in this.deliveredHouses) {
      if (courier === "santa") {
        if (house === `${this.santa.x}${this.santa.y}`) {
          this.deliveredHouses[house]++;
        } else {
          this.deliveredHouses[`${this.santa.x}${this.santa.y}`] = 1;
        }
      } else {
        if (house === `${this.robot.x}${this.robot.y}`) {
          this.deliveredHouses[house]++;
        } else {
          this.deliveredHouses[`${this.robot.x}${this.robot.y}`] = 1;
        }
      }
    }
  }

  totalDeliveries(directions) {
    for (let i = 0; i < directions.length; i++) {
      const courier = i % 2 === 0 ? "santa" : "robot";
      this.move(directions[i], courier);
      this.delivery(courier);
    }
  }
}

const fs = require("fs");

function getPuzzleLines({ numeric = false } = {}) {
  const txt = fs.readFileSync("../inputs/03_input.txt", "utf-8");
  const lines = txt.split("\n");
  return numeric ? lines.map((n) => +n) : lines;
}

const input = getPuzzleLines();
const presentCounter = new TeamTracker();
presentCounter.totalDeliveries(input[0]);
console.log(presentCounter);

module.exports = { PresentTracker, TeamTracker };
