const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [size, ...info] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

info = info.map((e) => e.split(" ").map(Number));

const dp = new Array(size + 1).fill(0);

info.reverse();
info.unshift([0, 0]);

for (let i = 1; i <= size; i++) {
  const [days, price] = info[i];
  if (days > i) {
    dp[i] = dp[i - 1];
  } else {
    dp[i] = Math.max(dp[i - 1], price + dp[i - days]);
  }
}

console.log(dp.at(-1));
