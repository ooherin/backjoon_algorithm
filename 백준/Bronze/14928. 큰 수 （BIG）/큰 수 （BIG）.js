const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

const bigNumber = BigInt(input);
const result = bigNumber % 20000303n;

console.log(result.toString());
