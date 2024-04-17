const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const count = Number(input.shift());

const arr = input.map((str) => str.split(" ").map(Number));

for (let i = 1; i < count; i++) {
  arr[i][0] += Math.min(arr[i - 1][1], arr[i - 1][2]);
  arr[i][1] += Math.min(arr[i - 1][0], arr[i - 1][2]);
  arr[i][2] += Math.min(arr[i - 1][0], arr[i - 1][1]);
}

console.log(Math.min(...arr[count - 1]));
