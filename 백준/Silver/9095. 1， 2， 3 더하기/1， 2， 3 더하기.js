const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

for (let i = 0; i < input.length; i++) {
  const dp = [0];
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let j = 4; j <= input[i]; j++) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
  }
  console.log(dp[input[i]]);
}
