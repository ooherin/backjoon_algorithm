const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString();
input = Number(input);

let answer = 1;

while (input >= 1) {
  answer *= input;
  input--;
}

console.log(answer);
