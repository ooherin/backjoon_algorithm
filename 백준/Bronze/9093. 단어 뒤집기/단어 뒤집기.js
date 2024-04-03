const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const stack = [];
let reversedArr = [];
let string = "";

for (let i = 1; i < input.length; i++) {
  const words = input[i].split(" ");
  const stack = [];

  for (let j = 0; j < words.length; j++) {
    const word = words[j];

    for (let k = 0; k < word.length; k++) {
      stack.push(word[k]);
    }

    while (stack.length) {
      string += stack.pop();
    }
    reversedArr.push(string);
    string = "";
  }

  const answer = reversedArr.join(" ");
  console.log(answer);
  reversedArr = [];
}