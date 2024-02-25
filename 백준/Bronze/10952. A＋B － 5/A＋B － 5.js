const numbers = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < numbers.length - 1; i++) {
  const [a, b] = numbers[i].split(" ").map(Number);
  console.log(a + b);
}
