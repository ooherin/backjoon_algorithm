let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
const [a, b, n] = input.split(" ").map(Number);

let result = a % b;

for(let i = 0; i < n-1; i++){
    result *= 10;
    result %= b;
};

result *= 10;

console.log(Math.floor(result/b));