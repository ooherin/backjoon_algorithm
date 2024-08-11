const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let N = require("fs").readFileSync(filePath).toString().trim();

for (let i = 1; i < N; i++) {
  let blank = " ".repeat(N - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(blank + stars);
}

for (let j = N; j > 0; j--) {
  let blank = " ".repeat(N - j);
  let stars = "*".repeat(2 * j - 1);
  console.log(blank + stars);
}
