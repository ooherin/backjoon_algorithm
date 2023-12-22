const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let count = Number(input[0]);
let arr = input[1].split(' ').map(Number).sort((a,b) => a-b);
const min = arr[0];
const max = arr[count - 1];
let answer;
answer = count >= 2 ? min * max : min * min
console.log(answer);