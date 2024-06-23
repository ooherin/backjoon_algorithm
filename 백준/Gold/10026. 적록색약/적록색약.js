const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [count, ...lines] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = lines[0].length;
const M = lines.length;

let map;

const makeMap = () => {
  map = new Array(N).fill(0).map((e) => new Array(M).fill(0));
  return map;
};

const direction = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

const bfs = (x, y, color, isNormal) => {
  const queue = [[x, y]];
  map[x][y] = 1;

  while (queue.length) {
    const [cx, cy] = queue.shift();

    for (const [dx, dy] of direction) {
      const nx = dx + cx;
      const ny = dy + cy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M || map[nx][ny] !== 0) continue;

      if (isNormal) {
        if (lines[nx][ny] === color) {
          map[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      } else {
        if (color === "B") {
          if (lines[nx][ny] === color) {
            map[nx][ny] = 1;
            queue.push([nx, ny]);
          }
          //빨강 또는 초록
        } else {
          if (["R", "G"].includes(lines[nx][ny])) {
            map[nx][ny] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
};

let normalAnswer = 0;
let notNormalAnswer = 0;

makeMap();

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const color = lines[i][j];

    if (map[i][j] === 0) {
      bfs(i, j, color, true);
      normalAnswer++;
    }
  }
}

makeMap();

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const color = lines[i][j];

    if (map[i][j] === 0) {
      bfs(i, j, color, false);
      notNormalAnswer++;
    }
  }
}

console.log(normalAnswer);
console.log(notNormalAnswer);
