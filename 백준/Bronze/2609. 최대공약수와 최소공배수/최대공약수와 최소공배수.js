const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, M] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const GCD = (x, y) => {
  if (y === 0) return x;
  return GCD(y, x % y);
};

const gcd = GCD(N, M);

console.log(gcd);
console.log((M * N) / gcd);
