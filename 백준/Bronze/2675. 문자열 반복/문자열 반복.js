const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < a; i++) {
  const [count, words] = input[i].split(" ");
  let answer = "";
  answer = [...words].map((e) => e.repeat(count)).join("");
  console.log(answer);
}
