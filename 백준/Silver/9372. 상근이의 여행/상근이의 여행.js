const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [testCase, ...info] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= testCase; i++) {
  const [country, sort] = info.shift().split(" ").map(Number);

  for (let j = 0; j < sort; j++) {
    info.shift();
  }
  console.log(country - 1);
}
