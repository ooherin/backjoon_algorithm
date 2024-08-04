const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let N = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)[0];

while (N > 0) {
  console.log(N);
  N--;
}
