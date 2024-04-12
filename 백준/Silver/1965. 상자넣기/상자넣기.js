const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [length, numbers] = input;
numbers = numbers.split(" ").map(Number);

let lis = new Array(Number(length)).fill(1);

for (let i = 1; i < Number(length); i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j] && lis[i] < lis[j] + 1) {
      lis[i] = lis[j] + 1;
    }
  }
}

const answer = Math.max(...lis);

console.log(answer);