const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [count, result] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const getSum = (n) => {
  const arr = new Array(n).fill(0).map((e, i) => i + 1);
  const answer = arr.reduce((acc, cur) => (acc += cur), 0);
  return answer;
};

const answer = result
  .split(" ")
  .join("")
  .split(0)
  .filter((e) => e !== "")
  .map((e) => e.length)
  .reduce((acc, cur) => {
    acc += getSum(cur);
    return acc;
  }, 0);

console.log(answer);
