let fs = require("fs");
var arr = fs.readFileSync("/dev/stdin").toString().split("\n");

arr.forEach((numberSet) => {
  const value = numberSet.split(" ").map(Number);

if (value[0] == 0) return;

  value.sort((a, b) => {
    return a - b;
  });

  if (value[0] * value[0] + value[1] * value[1] === value[2] * value[2]) {
    console.log("right");
  } else {
    console.log("wrong");
  }
});
