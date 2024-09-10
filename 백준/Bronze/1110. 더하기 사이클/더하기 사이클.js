const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let startNumber = require("fs").readFileSync(filePath).toString().trim();

startNumber = Number(startNumber);

let number = startNumber;
let count = 0;

while (true) {
  count++;
  let sum = Math.floor(number / 10) + (number % 10);
  number = (number % 10) * 10 + (sum % 10);

  if (startNumber === number) break;
}

console.log(count);
