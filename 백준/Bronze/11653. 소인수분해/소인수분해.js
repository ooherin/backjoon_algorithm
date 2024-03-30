const input = require("fs").readFileSync("/dev/stdin").toString();

let number = input;
let divide = 2;

while (number >= 2) {
  if (number % divide === 0) {
    console.log(divide);
    number = number / divide;
  } else {
    divide++;
  }
}

