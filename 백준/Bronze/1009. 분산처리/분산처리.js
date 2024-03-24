const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(" ");

  let answer = 1;

  for (let j = 0; j < b; j++) {
    answer = (answer * a) % 10;
  }

  console.log(answer === 0 ? 10 : answer);
}
