const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let a = require("fs").readFileSync(filePath).toString();
a = Number(a);

const dp = [];

dp[0] = 0;
dp[1] = 0;

for (let i = 2; i <= a; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
  }
}

console.log(dp[a]);

