const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');
let answer = '';
for(let i = 1; i <= Number(input[0]); i++){
    const [a,b] = input[i].split(' ').map(Number)
    answer += (a + b) + '\n';
}
console.log(answer)