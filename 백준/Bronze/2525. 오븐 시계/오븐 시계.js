const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');
let [originHour, originMin] = input[0].split(' ').map(Number);
originMin = parseInt(originMin) + parseInt(input[1]);
while(originMin >= 60){
    originHour += 1;
    originMin -= 60;
}
if(originHour >= 24){
    originHour -= 24;
}
console.log(originHour, originMin)
