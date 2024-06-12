const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [number, divider] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const numberSlice = number.slice(0, number.length - 2);

for (let i = 0; i < 99; i++) {
  let end = i < 10 ? "0" + String(i) : String(i);
  const number = Number(numberSlice + end);
  if (number % Number(divider) === 0) {
    console.log(end);
    break;
  }
}
