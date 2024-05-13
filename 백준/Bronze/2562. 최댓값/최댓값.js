const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const max = Math.max(...input);
console.log(max);
console.log(input.indexOf(max) + 1);
