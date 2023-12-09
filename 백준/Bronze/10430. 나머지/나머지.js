const input = require("fs").readFileSync("/dev/stdin").toString();
const [A,B,C] = input.split(' ').map((e) => Number(e));
console.log((A+B)%C);
console.log(((A%C)+(B%C))%C);
console.log((A*B%C));
console.log(((A%C)*(B%C))%C);