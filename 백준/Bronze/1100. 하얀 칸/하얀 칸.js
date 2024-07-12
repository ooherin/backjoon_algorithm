const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let lines = require("fs").readFileSync(filePath).toString().trim().split("\n");

let answer = 0;
for (let i = 0; i < 8; i++) {
  const isWhiteStart = !(i % 2);

  for (let j = 0; j < 8; j++) {
    if (isWhiteStart) {
      if (j % 2 === 0) {
        if (lines[i][j] === "F") {
          answer++;
        }
      }
    } else {
      if (j % 2 === 1) {
        if (lines[i][j] === "F") {
          answer++;
        }
      }
    }
  }
}
console.log(answer);
