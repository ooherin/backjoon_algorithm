const input = require('fs').readFileSync('./dev/stdin').toString().split(' ').map(Number);
let answer = input[0] * input[1] - input[2];
answer = answer >= 0 ? answer : 0;
console.log(answer)