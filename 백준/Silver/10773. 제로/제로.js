const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const [count, ...numbers] = inputs;

const queue = [];

for (let i = 0; i < count; i++) {
  if (numbers[i] === 0) {
    queue.pop();
  } else {
    queue.push(numbers[i]);
  }
}

let answer = 0;
for (let i = 0; i < queue.length; i++) {
  answer += queue[i];
}

console.log(answer);
