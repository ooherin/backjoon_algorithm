const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let a = require("fs").readFileSync(filePath).toString().trim();
a = Number(a);

console.log(
  Array.from({ length: a }, (e, i) => i + 1).reduce((acc, cur) => acc + cur, 0)
);
