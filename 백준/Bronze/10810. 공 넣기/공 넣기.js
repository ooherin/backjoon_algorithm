const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [[N, M], ...moves] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const baskets = new Array(N + 1).fill(0);

for (let i = 0; i < M; i++) {
  const [to, from, target] = moves[i];
  for (let j = to; j <= from; j++) {
    baskets[j] = target;
  }
}

console.log(baskets.slice(1, N + 1).join(" "));
