const input =  require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const price = Number(input[0]);
const list = input.slice(2);
const NumberList = list.map((e) => (e.split(' ').map(e=> Number(e))))
const sum = NumberList.reduce((acc,cur) => {
    acc += cur[0] * cur[1];
    return acc;
},0)
console.log(sum == price ? 'Yes' : 'No')