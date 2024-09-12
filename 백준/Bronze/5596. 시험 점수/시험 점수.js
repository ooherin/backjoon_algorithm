const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [a,b] = input.map((e) => e.split(' ').map(Number).reduce((a, b) => a + b, 0));
let result = a > b ? a : b;
console.log(result);