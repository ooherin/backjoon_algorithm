const input = require("fs").readFileSync(0).toString().split('\n');
const [a,b] = input;
if(a > 0){
    console.log(b > 0 ? 1 : 4) 
}else{
    console.log(b > 0 ? 2 : 3)
}