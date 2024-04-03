const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [line, count] = input[0].split(" ").map(Number);

const arr = Array.from({ length: line }, () => new Array(count).fill(0));

input.shift();

for (let i = 0; i < input.length; i++) {
  const rest = i % line;
  const numbers = input[i].split(" ").map(Number);
  for (let j = 0; j < numbers.length; j++) {
    arr[rest][j] += numbers[j];
  }
}

const answer = arr.map((e) => e.join(" ")).join("\n");
console.log(answer);