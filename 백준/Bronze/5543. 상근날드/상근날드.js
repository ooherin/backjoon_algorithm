const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let menus = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const burgers = menus.slice(0, menus.length - 2);
const cheapBurger = Math.min(...burgers);

const beverage = menus.slice(-2);
const cheapBeverage = Math.min(...beverage);

console.log(cheapBeverage + cheapBurger - 50);
