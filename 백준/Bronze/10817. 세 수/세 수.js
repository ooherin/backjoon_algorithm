const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let arr = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
console.log(arr.sort((a,b) => b - a)[1])