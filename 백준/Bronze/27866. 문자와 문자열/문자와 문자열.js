const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, count] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

console.log(a[count - 1]);
