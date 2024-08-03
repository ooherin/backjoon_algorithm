const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

input = input.split("-").map((e) => e.split("+").map(Number));

let answer = 0;

for (let i = 0; i < input.length; i++) {
  const partSum = input[i].reduce((acc, cur) => (acc += cur), 0);
  if (i === 0) {
    answer += partSum;
  } else {
    answer -= partSum;
  }
}

console.log(answer);
