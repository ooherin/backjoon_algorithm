const number = require("fs").readFileSync("/dev/stdin").toString();

for (let i = 1; i <= number; i++) {
  console.log("*".repeat(i));
}
