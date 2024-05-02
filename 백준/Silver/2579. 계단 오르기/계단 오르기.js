const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [N, ...arr] = input;
N = Number(N);
arr = arr.map((i) => Number(i));

const dp = new Array(N).fill(0);
dp[0] = arr[0];
dp[1] = Math.max(arr[1], arr[1] + arr[0]);
dp[2] = Math.max(arr[2] + arr[0], arr[2] + arr[1]);

for (let i = 3; i < arr.length; i++) {
  dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
}

console.log(dp[N - 1]);
