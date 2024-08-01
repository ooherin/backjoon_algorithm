const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [info, ...coins] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

coins = coins.map((coin) => Number(coin)).reverse();

let [coinCount, price] = info.split(" ").map(Number);

const answer = coins.reduce((acc, coin) => {
  if (price >= coin) {
    const addCoin = Math.floor(price / coin);
    price -= addCoin * coin;
    acc += addCoin;
  }
  return acc;
}, 0);

console.log(answer);
