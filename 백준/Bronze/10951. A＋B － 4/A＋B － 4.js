const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let numbers = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));
const answer = numbers.reduce((acc, cur) => {
  acc.push(cur[0] + cur[1]);
  return acc;
}, []);
console.log(answer.join("\n"));