let input = require('fs').readFileSync('dev/stdin').toString();
let [hour, minute] = input.split(' ').map((e) => Number(e));

minute -= 45;
if(minute < 0){
    hour -= 1;
    minute += 60;
    
    if(hour == -1){
        hour = 23
    }
}

console.log(hour + ' ' + minute)