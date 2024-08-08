const piece = [1, 1, 2, 2, 2, 8];

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split(" ");
let arr = [];
arr = piece.map((ele, i) => ele - input[i]);

console.log(arr.join(" "));