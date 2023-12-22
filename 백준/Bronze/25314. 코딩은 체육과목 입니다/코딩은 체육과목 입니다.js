const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const number = parseInt(input) / 4;
let arr = [];
for(let i =0 ; i < number; i++){
    arr.push('long')
}
arr.push('int')
console.log(arr.join(' '))