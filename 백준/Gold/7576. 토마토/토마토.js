const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [size, ...tomatos] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

tomatos = tomatos.map((line) => line.split(" ").map(Number));
const [M, N] = size.split(" ").map(Number);

const directions = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

const queue = [];
let days = 0;

for (let column = 0; column < N; column++) {
  for (let row = 0; row < M; row++) {
    if (tomatos[column][row] === 1) {
      queue.push([column, row, 0]);
    }
  }
}

let index = 0;
while (index < queue.length) {
  const [x, y, currentDay] = queue[index++];
  days = Math.max(days, currentDay);
  for (const [dx, dy] of directions) {
    const nx = dx + x;
    const ny = dy + y;
    if (nx < N && nx >= 0 && ny < M && ny >= 0 && tomatos[nx][ny] === 0) {
      tomatos[nx][ny] = 1;
      queue.push([nx, ny, currentDay + 1]);
    }
  }
}

for (let column = 0; column < N; column++) {
  for (let row = 0; row < M; row++) {
    if (tomatos[column][row] === 0) {
      days = -1;
    }
  }
}

console.log(days);
