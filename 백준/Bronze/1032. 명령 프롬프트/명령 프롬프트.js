const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...word] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let answer = [...word[0]];

for (let i = 0; i < word.length; i++) {
  for (let j = 0; j < word[i].length; j++) {
    if (answer[j] !== word[i][j]) {
      answer[j] = "?";
    }
  }
}

console.log(answer.join(""));
