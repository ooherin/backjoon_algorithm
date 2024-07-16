const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [count, numbers] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

numbers = numbers.split(" ").map(Number);

const sortedNumbers = [...numbers].sort((a, b) => b - a);
if (sortedNumbers[0] < 0) {
  return console.log(sortedNumbers[0]);
}
const dp = new Array(count + 1).fill(0);

for (let i = 1; i <= numbers.length; i++) {
  //그 전것을 합치던지, 나 자신 부터 시작하던지, 아니면 그 전걸 그냥 가져오던지
  const max = Math.max(dp[i - 1] + numbers[i - 1], numbers[i - 1]);
  dp[i] = max;
}

console.log(Math.max(...dp));
