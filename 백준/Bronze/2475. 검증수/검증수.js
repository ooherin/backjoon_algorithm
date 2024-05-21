const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let a = require("fs").readFileSync(filePath).toString().split(" ").map(Number);

const answer = a.reduce((acc, cur) => acc + cur ** 2, 0);
console.log(answer % 10);
