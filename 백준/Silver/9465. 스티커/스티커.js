const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...inputs] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < N; i++) {
  const count = inputs.shift();

  const stickers = [];
  const line1 = inputs.shift().split(" ").map(Number);
  const line2 = inputs.shift().split(" ").map(Number);
  stickers.push(line1);
  stickers.push(line2);

  //1. 아무것도 안 넣었을 때
  //2. line1을 선택했을 때
  //3. line2를 선택했을 때
  const dp = [[[0], line1[0], line2[0]]];

  for (let i = 1; i < count; i++) {
    const one = Math.max(...dp[i - 1]);
    const two = Math.max(dp[i - 1][0], dp[i - 1][2]) + line1[i];
    const three = Math.max(dp[i - 1][0], dp[i - 1][1]) + line2[i];

    dp[i] = [one, two, three];
  }
  console.log(Math.max(...dp.at(-1)));
}
