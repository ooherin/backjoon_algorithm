const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [count, a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const nextRoundNumber = (a) => {
  // if (a === 1) return -1;

  if (a % 2 === 0) return a / 2;
  return Math.floor(a / 2) + 1;
};

let leftPeople = count;
let round = 1;

while (true) {
  a = nextRoundNumber(a);
  b = nextRoundNumber(b);
  if (a === b) {
    break;
  }
  if (a <= 0 || b <= 0) {
    round = -1;
    break;
  }
  round++;
  leftPeople /= 2;
}

console.log(round);
