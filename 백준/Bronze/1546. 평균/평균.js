const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, numbers] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

numbers = numbers.split(" ").map(Number);
const max = Math.max(...numbers);

const sum = numbers.reduce((acc, cur) => (acc += cur), 0);
const answer = ((sum / max) * 100) / numbers.length;

const countDecimalPlaces = (number) => {
  const numberAsString = number.toString();
  const dotIndex = numberAsString.indexOf(".");
  if (dotIndex === -1) return 0;

  return numberAsString.length - dotIndex - 1;
};

if (!countDecimalPlaces(answer)) return console.log(answer.toFixed(1));
if (countDecimalPlaces(answer) < 5) return console.log(answer);
console.log(answer.toFixed(5));
