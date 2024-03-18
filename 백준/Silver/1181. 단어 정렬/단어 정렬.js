const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [count, ...numbers] = input;

numbers.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }
  return a.localeCompare(b);
});

const uniqueNumbers = new Set(numbers);

console.log([...uniqueNumbers].join("\n"));