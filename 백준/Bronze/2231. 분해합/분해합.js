const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let a = require("fs").readFileSync(filePath).toString().trim();
a = Number(a);

let i = 0;

let answer = 0;
while (i < a) {
  const sum = [...String(i)].reduce((acc, cur) => (acc += Number(cur)), i);
  if (a === sum) {
    answer = i;
    break;
  }
  i++;
}

console.log(answer);