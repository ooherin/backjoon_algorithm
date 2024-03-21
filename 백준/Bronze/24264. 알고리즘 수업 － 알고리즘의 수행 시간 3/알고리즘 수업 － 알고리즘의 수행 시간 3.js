const input = require("fs")
  .readFileSync("/dev/stdin") ///dev/stdin
  .toString()
  .trim();

console.log(input ** 2);
console.log(2);
