const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [x, y, a, b] = input;
const arr = [x, y, b - y, a - x];
console.log(Math.min(...arr));
