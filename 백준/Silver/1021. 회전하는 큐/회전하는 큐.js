const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [info, target] = input;
const [number, targetCount] = info.split(" ").map(Number);

const targets = target.split(" ").map(Number);

let numbers = new Array(number).fill(0).map((e, i) => i + 1);

let answer = 0;

for (let i = 0; i < targetCount; i++) {
  let targetIndex = numbers.indexOf(targets[i]);
  if (targetIndex !== 0) {
    const fontSliced = [...numbers].slice(0, targetIndex);
    const endSliced = [...numbers].slice(targetIndex + 1);
    numbers = [...endSliced, ...fontSliced];
    answer += Math.min(fontSliced.length, endSliced.length + 1);
  } else {
    numbers.shift();
  }
}

console.log(answer);