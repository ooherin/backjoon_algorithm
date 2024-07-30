const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let numbers = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const [x1, x2] = numbers[0];
const [y1, y2] = numbers[1];

let molecule = x1 * y2 + y1 * x2; //분자
let denominator = x2 * y2; //분모

//유클리드 호제법
//나머지가 최종 0 이 될 때까지
//y => x로 이동
//나머지 => y 로 이동
const gcd = (x, y) => {
  if (y === 0) return x;
  return gcd(y, x % y);
};

const MaxDivider = gcd(molecule, denominator);

console.log([molecule / MaxDivider, denominator / MaxDivider].join(" "));
