const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let N = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(N.sort((a, b) => a - b).join(" "));
