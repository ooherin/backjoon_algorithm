const number = require("fs").readFileSync("/dev/stdin").toString();

for (let i = 1; i <= number; i++) {
  const str = " ".repeat(number - i) + "*".repeat(i);
  console.log(str);
}
