const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.pop();
const numbers = input.map((numbers) => numbers.split(" ").map((e) => +e));

numbers.forEach((number) => {
  if (number[0] % number[1] === 0) return console.log("multiple");
  if (number[1] % number[0] === 0) return console.log("factor");
  return console.log("neither");
});
