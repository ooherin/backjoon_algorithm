const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = +Number(input);
let result = '';

for (let i = 0; i < N; i++) {
    let space = '';
    space += ' '.repeat(i);
    let star = '';
    star += '*'.repeat(N-i);
    result += space + star + '\n';
}

console.log(result);