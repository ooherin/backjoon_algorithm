const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().split(' ');
console.log(input[1] * 2 - input[0])