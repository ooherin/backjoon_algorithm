const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [count, ...info] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [Y, X] = count.split(" ").map(Number);
const numbers = info.map((line) => line.split("").map(Number));

let answer = 1;

for (let i = 0; i < Y; i++) {
  for (let j = 0; j < X; j++) {
    for (let k = 1; k < Math.min(Y - i, X - j); k++) {
      if (
        numbers[i][j] === numbers[i + k][j] &&
        numbers[i][j] === numbers[i][j + k] &&
        numbers[i][j] === numbers[i + k][j + k]
      ) {
        answer = Math.max(answer, k + 1);
      }
    }
  }
}

console.log(answer * answer);
