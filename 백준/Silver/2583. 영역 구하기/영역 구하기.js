const { dir } = require("console");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [[M, N, K], ...dots] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

let graphs = new Array(M).fill(0).map(() => new Array(N).fill(0));
let visited = new Array(M).fill(0).map(() => new Array(N).fill(false));

for (let i = 0; i < K; i++) {
  const [bottomLeftX, bottomLeftY, topRightX, topRightY] = dots[i];

  for (let x = bottomLeftY; x < topRightY; x++) {
    for (let y = bottomLeftX; y < topRightX; y++) {
      graphs[x][y] = 1;
      visited[x][y] = true;
    }
  }
}

const left = [1, 0];
const right = [-1, 0];
const bottom = [0, -1];
const top = [0, 1];

const directions = [left, right, bottom, top];

const dfs = (x, y) => {
  const stack = [[x, y]];
  let area = 0;

  while (stack.length) {
    const [cx, cy] = stack.pop();
    if (
      cx < 0 ||
      cx >= M ||
      cy < 0 ||
      cy >= N ||
      visited[cx][cy] ||
      graphs[cx][cy] === 1
    ) {
      continue;
    }
    visited[cx][cy] = true;
    area++;

    for (let [dx, dy] of directions) {
      stack.push([cx + dx, cy + dy]);
    }
  }
  return area;
};

let areas = [];

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j] && graphs[i][j] === 0) {
      let area = dfs(i, j);
      if (area > 0) {
        areas.push(area);
      }
    }
  }
}

areas.sort((a, b) => a - b);

console.log(areas.length);
console.log(areas.join(" "));
