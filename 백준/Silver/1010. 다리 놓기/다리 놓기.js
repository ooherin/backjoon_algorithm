let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function answer() {
  for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    const head = factorial(b);
    const tail1 = factorial(a);
    const tail2 = factorial(b - a);
    console.log(Math.round(head / (tail1 * tail2)));
  }
}

answer();

function factorial(n) {
  if (n <= 1) return 1;
  let answer = 1;
  while (n > 0) {
    answer *= n;
    n--;
  }
  return answer;
}
