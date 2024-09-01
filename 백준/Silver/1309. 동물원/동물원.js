let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

input = Number(input);

const dp = [];
dp[0] = 0;
dp[1] = 3;
dp[2] = 7;

if (input < 2) {
  return console.log(dp[input]);
}

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}

console.log(dp[input]);
