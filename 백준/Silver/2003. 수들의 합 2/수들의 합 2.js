const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [[N, M], ...numbersArray] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const numbers = numbersArray.flat();

let answer = 0;
let partSum = 0;
let start = 0;

for (let end = 0; end < N; end++) {
  partSum += numbers[end];

  while (partSum > M) {
    partSum -= numbers[start];
    start++;
  }

  if (partSum === M) {
    answer++;
  }
}

console.log(answer);
