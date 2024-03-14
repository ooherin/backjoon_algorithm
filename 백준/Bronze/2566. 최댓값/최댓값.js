const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numbersSet = inputs.map((numbers) => {
  return numbers.split(" ").map(Number);
});

let max = numbersSet[0][0];

let answer = [1, 1];
numbersSet.forEach((numbers, i) => {
  numbers.forEach((number, j) => {
    if (max < number) {
      max = number;
      answer = [i + 1, j + 1];
    }
  });
});

console.log(max);
console.log(answer.join(" "));
