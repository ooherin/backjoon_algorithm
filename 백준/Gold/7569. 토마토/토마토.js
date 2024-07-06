const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [size, ...tomatosArr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [M, N, H] = size.split(" ").map(Number);

tomatosArr = tomatosArr.map((line) => line.split(" ").map(Number));

let tomatos = [];
let temp = [];

for (let i = 0; i < tomatosArr.length; i++) {
  temp.push(tomatosArr[i]);
  if ((i + 1) % N === 0) {
    tomatos.push(temp);
    temp = [];
  }
}

//처음은 층수, 두번째는 N, 세번째는 M
const direction = [
  [0, -1, 0],
  [0, 1, 0],
  [-1, 0, 0],
  [1, 0, 0],
  [0, 0, 1],
  [0, 0, -1],
];

let queue = [];
let unripeTomatos = 0;

for (let z = 0; z < H; z++) {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (tomatos[z][y][x] === 1) {
        queue.push([x, y, z, 0]);
      }
      if (tomatos[z][y][x] === 0) unripeTomatos++;
    }
  }
}

let idx = 0;
let days = 0;
while (queue.length > idx) {
  const [x, y, z, day] = queue[idx++];

  for (const [dx, dy, dz] of direction) {
    const nx = dx + x;
    const ny = dy + y;
    const nz = dz + z;

    if (
      nx < M &&
      nx >= 0 &&
      ny < N &&
      ny >= 0 &&
      nz < H &&
      nz >= 0 &&
      tomatos[nz][ny][nx] === 0
    ) {
      tomatos[nz][ny][nx] = 1;
      unripeTomatos--;
      queue.push([nx, ny, nz, day + 1]);
      days = day + 1;
    }
  }
}

if (unripeTomatos) return console.log(-1);
console.log(days);
