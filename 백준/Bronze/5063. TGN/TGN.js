const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...inputs] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

inputs = inputs.map((e) => e.split(" ").map(Number));

let result = [];
for (let i = 0; i < inputs.length; i++) {
  let noAd = inputs[i][0];
  let ad = inputs[i][1] - inputs[i][2];
  if (noAd > ad) result.push("do not advertise");
  else if (noAd < ad) result.push("advertise");
  else result.push("does not matter");
}

console.log(result.join("\n"));