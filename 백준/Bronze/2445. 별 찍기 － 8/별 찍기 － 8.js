const input = require("fs").readFileSync("/dev/stdin").map(Number);

for (let i = 1; i < input; i++) {
  const str = "*".repeat(i) + " ".repeat(input - i);
  const reversed = [...str].reverse().join("");
  console.log(str + reversed);
}

for (let i = input; i >= 1; i--) {
  const str = "*".repeat(i) + " ".repeat(input - i);
  const reversed = [...str].reverse().join("");
  console.log(str + reversed);
}
