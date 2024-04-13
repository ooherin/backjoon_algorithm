const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [length, numbers] = input;
length = Number(length);
numbers = numbers.split(" ").map(Number);

const count = new Array(length).fill(1);

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[j] > numbers[i]) {
      count[i] = Math.max(count[j] + 1, count[i]);
    }
  }
}
console.log(Math.max(...count));