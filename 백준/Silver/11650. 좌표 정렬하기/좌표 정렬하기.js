const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [size, ...dots] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

dots = dots.map((dot) => dot.split(" ").map(Number));

const arr = dots.sort((a, b) => {
 if(a[0] === b[0]){
    if(b[1] > a[1]) return -1;
 }
    return a[0] - b[0];
});

console.log(arr.map((e) => e.join(" ")).join("\n"));
