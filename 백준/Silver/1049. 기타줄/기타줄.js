const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const numbers = input.map((e) => e.split(" ").map(Number));

let [stringCount, brandCount] = numbers.shift();

const setPrice = numbers.map((number) => number[0]);
const onePrice = numbers.map((number) => number[1]);

const minSetPrice = Math.min(...setPrice);
const minOnePrice = Math.min(...onePrice);

let answer = 0;

if (minSetPrice < minOnePrice * 6) {
  const setCount = Math.floor(stringCount / 6);
  const oneCount = stringCount - 6 * setCount;

  const mixBuyPrice = setCount * minSetPrice + oneCount * minOnePrice;

  if (stringCount / 6 !== setCount) {
    let setBuyPrice = 0;
    setBuyPrice = minSetPrice * (setCount + 1);
    answer = Math.min(mixBuyPrice, setBuyPrice);
  } else {
    answer = mixBuyPrice;
  }
} else {
  answer = minOnePrice * stringCount;
}

console.log(answer);
