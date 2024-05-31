const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [count, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < count; i++) {
  const a = Number(input.shift());
  const b = Number(input.shift());

  const apartment = new Array(a + 1).fill(0).map(() => new Array(b).fill(0));

  const zeroFloor = new Array(b).fill(0).map((e, i) => i + 1);

  apartment[0] = zeroFloor;

  for (let j = 1; j <= a; j++) {
    for (let k = 0; k < b; k++) {
      if (k === 0) {
        apartment[j][k] = 1;
      } else {
        apartment[j][k] = apartment[j - 1][k] + apartment[j][k - 1];
      }
    }
  }
  console.log(apartment[a][b - 1]);
}
