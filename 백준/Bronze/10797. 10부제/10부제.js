const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [day, car] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let cnt = 0;
for (let i = 0; i < car.length; i++) {
  if (car[i] === day) {
    cnt++;
  }
}

console.log(cnt);
