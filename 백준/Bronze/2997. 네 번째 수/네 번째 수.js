const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const sorted = inputs.sort((a, b) => a - b);

const [a, b, c] = sorted;

const term = [Math.abs(a - b), Math.abs(b - c)];

if (term[0] === term[1]) {
  console.log(c + term[0]);
} else {
  if (term[0] > term[1]) {
    console.log(a + term[1]);
  } else {
    console.log(b + term[0]);
  }
}
