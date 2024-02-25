const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [_, numbers, target] = inputs;
const numbersArr = numbers.split(" ").map(Number);

const answer = numbersArr.reduce((acc, cur) => {
  if (cur === Number(target)) {
    acc++;
  }
  return acc;
}, 0);

console.log(answer);
