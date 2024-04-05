const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [a, first, second] = input;

let firstNumbers = first.split(" ").map(Number);
firstNumbers.sort((a, b) => b - a);

let secondNumbers = second.split(" ").map(Number);
secondNumbers.sort((a, b) => a - b);

const answer = firstNumbers.reduce((acc, cur, index) => {
  acc += cur * secondNumbers[index];
  return acc;
}, 0);

console.log(answer);
