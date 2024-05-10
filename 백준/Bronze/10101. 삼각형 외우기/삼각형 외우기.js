const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let numbers = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = numbers.reduce((acc, cur) => (acc += cur), 0);

let answer = 0;
if (sum !== 180) {
  answer = "Error";
} else {
  const uniqueArr = new Set(numbers);

  if (uniqueArr.size === 1) answer = "Equilateral";
  if (uniqueArr.size === 2) answer = "Isosceles";
  if (uniqueArr.size === 3) answer = "Scalene";
}

console.log(answer);