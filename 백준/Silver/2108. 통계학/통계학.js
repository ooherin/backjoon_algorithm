const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const count = input.shift();
const averageResult = average(input);
const mediumResult = medium(input);
const modeResult = mode(input);
const rangeResult = range(input);

console.log(averageResult);
console.log(mediumResult);
console.log(modeResult);
console.log(rangeResult);

function average(arr) {
  const sum = arr.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
  const answer = Math.round(sum / arr.length);
  if (answer === -0) return 0;
  return answer;
}

function medium(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  if (arr.length % 2 === 1) {
    const mediumIndex = (arr.length - 1) / 2;
    return sortedArr[mediumIndex];
  } else {
    const a = arr.length / 2;
    const b = arr.length - 1 / 2;
    const medium = sortedArr[a] + sortedArr[b] / 2;
    return medium;
  }
}

function mode(arr) {
  const obj = arr.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  let max = 0;
  for (const key in obj) {
    if (max < obj[key]) max = obj[key];
  }

  const answerArr = [];
  for (const key in obj) {
    if (obj[key] === max) answerArr.push(key);
  }

  if (answerArr.length === 1) return answerArr[0];
  answerArr.sort((a, b) => a - b);
  return answerArr[1];
}

function range(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return Math.abs(max - min);
}
