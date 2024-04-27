const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let target = require("fs").readFileSync(filePath);
target = Number(target);

let count = 0;

while (target > 0) {
  if (target & 1) {
    count++;
  }
  target >>= 1;
}

console.log(count);
