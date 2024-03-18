let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [number, a, b] = input;

const aArr = a
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

const bArr = b
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const answer = aArr.reduce((acc, cur, index) => {
  acc += cur * bArr[index];
  return acc;
}, 0);

console.log(answer);
