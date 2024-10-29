const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = input.reduce((acc, cur) => (acc += cur), 0);
let realDwarfs;
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (sum - input[i] - input[j] === 100) {
      realDwarfs = input.filter((e, index) => index !== i && index !== j);
      return console.log(realDwarfs.sort((a, b) => a - b).join("\n"));
    }
  }
}
