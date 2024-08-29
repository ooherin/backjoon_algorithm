let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

input = Number(input);

let answer = [];
for (let i = 1; i <= input; i++) {
  const total = input * 2;
  const starLength = 2 * i - 1;
  let emptyLength = (total - starLength) / 2;
  const line = " ".repeat(emptyLength) + "*".repeat(starLength);
  answer.push(line);
}
console.log(answer.join("\n"));
