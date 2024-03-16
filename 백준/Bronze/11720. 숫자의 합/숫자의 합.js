const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [count, number] = input;

let answer = 0;
for (let i = 0; i < number.length; i++) {
  answer += Number(number[i]);
}

console.log(answer);
