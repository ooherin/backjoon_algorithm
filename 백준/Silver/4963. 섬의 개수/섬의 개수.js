const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let inputs = require("fs").readFileSync(filePath).toString().trim().split("\n");

const directions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
  [-1, -1],
  [1, 1],
  [-1, 1],
  [1, -1],
];

const bfs = (map, y, x, startY, startX, visited) => {
  const queue = [[startY, startX]];
  visited[startY][startX] = true;

  while (queue.length) {
    const [ny, nx] = queue.shift();

    for (const [dy, dx] of directions) {
      const cy = dy + ny;
      const cx = dx + nx;

      if (cx >= 0 && cx < x && cy >= 0 && cy < y && !visited[cy][cx]) {
        visited[cy][cx] = true;

        if (map[cy][cx] === 1) {
          queue.push([cy, cx]);
        }
      }
    }
  }
};

const makeMap = (y) => {
  const map = [];
  for (let i = 0; i < y; i++) {
    map.push(inputs.shift().split(" ").map(Number));
  }
  return map;
};

while (true) {
  const current = inputs.shift();
  if (!current) break;

  const [x, y] = current.split(" ").map(Number);
  if (y === 0 && x === 0) break;

  const map = makeMap(y);
  const visited = new Array(y).fill(0).map(() => new Array(x).fill(false));
  let answer = 0;

  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (map[i][j] === 1 && !visited[i][j]) {
        answer++;
        bfs(map, y, x, i, j, visited);
      }
    }
  }

  console.log(answer);
}
