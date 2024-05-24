const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let word = require("fs").readFileSync(filePath).toString().trim(); // trim() 추가

const mid = Math.floor(word.length / 2);
let left = word.slice(0, mid);
let right = word.slice(word.length % 2 === 0 ? mid : mid + 1).split("").reverse().join("");

if (left === right) {
    console.log(1);
} else {
    console.log(0);
}