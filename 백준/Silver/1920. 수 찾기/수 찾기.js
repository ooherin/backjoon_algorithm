const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const findArr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const targetArr = input[3].split(" ").map(Number);

let answer = [];

targetArr.forEach((target) => {
  let start = 0;
  let end = findArr.length - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (target === findArr[mid]) {
      return answer.push(1);
    } else {
      if (target < findArr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return answer.push(0);
});

console.log(answer.join("\n"));
