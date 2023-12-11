const input = require("fs").readFileSync("/dev/stdin").toString();
const arr = input.split(' ').map(Number);
const sortedArr = arr.sort((a,b) => b-a);
//[3,2,2]
const set = new Set(sortedArr);
if(set.size == 3){
    console.log(sortedArr[0] * 100)
}else if(set.size == 2){
    const duplicate = arr.filter((e,i) => arr.indexOf(e) !== i)
    console.log(1000 + duplicate * 100)
}else{
    console.log(10000 + sortedArr[0] * 1000)
}