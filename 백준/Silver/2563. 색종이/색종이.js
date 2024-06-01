const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [count, ...info] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

info = info.map((e) => e.split(" ").map(Number));

const canvas = Array.from(Array(100), () => Array(100).fill(0));

for (let i = 0; i < count; i++) {
  const [x, y] = info[i];
  for (let dx = 0; dx < 10; dx++) {
    for (let dy = 0; dy < 10; dy++) {
      canvas[x + dx][y + dy] = 1;
    }
  }
}

let blackArea = 0;

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (canvas[i][j] === 1) {
      blackArea++;
    }
  }
}

console.log(blackArea);
