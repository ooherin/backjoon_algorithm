const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, numbers] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

numbers = numbers.split(" ").map(Number);

const isPrime = (target) => {
  if (target === 1) return 0;
  for (let j = 2; j <= Math.floor(Math.sqrt(target)); j++) {
    if (target % j === 0) {
      return 0;
    }
  }
  return 1;
};

let answer = 0;
for (const number of numbers) {
  if (isPrime(number)) {
    answer++;
  }
}

console.log(answer);
