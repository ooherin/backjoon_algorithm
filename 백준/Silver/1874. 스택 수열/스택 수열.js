const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [count, ...numbers] = input;

function solution() {
  const stack = [0];
  const answer = [];

  let currentNumber = 0;
  for (let i = 0; i < count; i++) {
    while (stack.at(-1) < numbers[i]) {
      stack.push(++currentNumber);
      answer.push("+");
    }
    if (stack.at(-1) === numbers[i]) {
      stack.pop();
      answer.push("-");
    } else {
      return console.log("NO");
    }
  }
  console.log(answer.join("\n"));
}

solution();
