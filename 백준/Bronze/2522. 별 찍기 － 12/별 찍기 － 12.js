const fs = require("fs");

const input = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `3`
);

let origin = [];
let reverse = [];

for (let i = 1; i <= input; i++) {
  origin.push(" ".repeat(input - i) + "*".repeat(i));
}

reverse = origin.slice().reverse().slice(1);

console.log(origin.concat(reverse).join("\n"));
