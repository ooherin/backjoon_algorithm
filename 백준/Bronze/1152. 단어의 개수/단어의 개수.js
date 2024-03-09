const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const wordArr = input.split(" ");
if (wordArr.length === 1 && wordArr[0] === "") return console.log(0);
console.log(wordArr.length);
