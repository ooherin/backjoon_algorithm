const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let b = input[1].split('').map((e) => Number(e));

let one = a * b[2];
let two = a * b[1];
let three = a * b[0];
console.log(one);
console.log(two);
console.log(three);
console.log(100 * three + 10 * two + one)

