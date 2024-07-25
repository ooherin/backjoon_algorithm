const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [[numbersCount, targetsCount], numbers, ...targets] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const sums = new Array(numbersCount + 1).fill(0);

for (let i = 1; i <= numbersCount; i++) {
  sums[i] = sums[i - 1] + numbers[i - 1];
}

const getPrefixSum = (start, end) => {
  return sums[end] - sums[start - 1];
};

const answer = [];
for (let i = 0; i < targetsCount; i++) {
  const [start, end] = targets[i];
  answer.push(getPrefixSum(start, end));
}

console.log(answer.join("\n"));
