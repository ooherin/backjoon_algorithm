const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const count = input.shift();
const dp = new Array(Number(count))
  .fill(0)
  .map((e, i) => new Array(i + 1).fill(0));

dp[0][0] = Number(input[0][0]);
for (let i = 1; i < dp.length; i++) {
  for (let j = 0; j < dp[i].length; j++) {
    const value = Number(input[i][j]);
    const bigger = Math.max(
      Number(dp[i - 1][j]) || 0,
      Number(dp[i - 1][j - 1]) || 0
    );
    dp[i][j] = value + bigger;
  }
}

console.log(Math.max(...dp.at(-1)));
