const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [_, numbers] = inputs;
const numbersArr = numbers.split(" ").map(Number);
const max = Math.max(...numbersArr);
const min = Math.min(...numbersArr);
console.log([min, max].join(" "));
