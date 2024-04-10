const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString();

input = Number(input);

if (!input % 5) return console.log(input / 5);
if (input < 5) {
  if (input === 3) {
    return console.log(1);
  } else {
    return console.log(-1);
  }
}
let fiveCount = Math.floor(input / 5);
let rest = input - fiveCount * 5;

function decidePackage() {
  if (rest % 3 === 0) {
    return console.log(fiveCount + rest / 3);
  } else {
    if (fiveCount >= 1) {
      fiveCount -= 1;
      rest = rest + 5;
      decidePackage();
    } else {
      return console.log(-1);
    }
  }
}
decidePackage();
