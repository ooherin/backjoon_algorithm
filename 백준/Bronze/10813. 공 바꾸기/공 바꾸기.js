const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].trim().split(' ').map(Number);
const basket = [];

for (let i = 0; i < n; i++) {
  basket.push(i + 1);
}

for (let i = 0; i < m; i++) {
  const [I, J] = input[i + 1].trim().split(' ').map(Number);
  let temp = basket[I - 1];
  basket[I - 1] = basket[J - 1];
  basket[J - 1] = temp;
}
console.log(basket.join(' '));