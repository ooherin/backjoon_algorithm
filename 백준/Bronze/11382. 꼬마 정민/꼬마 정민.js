const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const [A,B,C] = input;
console.log(A + B + C);