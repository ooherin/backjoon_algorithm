const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString();

input = Number(input);
let sum = 0;
let count = 0;

while (sum < input) {
  count++;
  sum += count;
  if (sum > input) count--;
}

console.log(count);