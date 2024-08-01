const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [count, ...duration] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

duration = duration[0];

duration = duration
  .sort((a, b) => b - a)
  .reduce((acc, cur, i) => {
    acc += cur * (i + 1);
    return acc;
  });
console.log(duration);
