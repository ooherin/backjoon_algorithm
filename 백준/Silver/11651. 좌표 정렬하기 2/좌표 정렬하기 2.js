const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [count, ...info] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

info = info.map((e) => e.split(" ").map(Number));
const sorted = info.sort((a, b) => {
  const diff1 = a[1] - b[1];
  if (diff1 !== 0) {
    return diff1;
  }
  return a[0] - b[0];
});

sorted.forEach((e) => {
  console.log(e.join(" "));
});
