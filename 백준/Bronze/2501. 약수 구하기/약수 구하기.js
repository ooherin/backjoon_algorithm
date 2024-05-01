const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [target, sequence] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

const sqrt = Math.sqrt(target);

const set = new Set();
for (let i = 1; i <= target; i++) {
  if (target % i === 0) {
    set.add(i);
  }
}
const arr = [...set].sort((a, b) => a - b);
console.log(arr[sequence - 1] ?? 0);
