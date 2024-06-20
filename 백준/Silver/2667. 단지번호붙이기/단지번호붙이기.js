const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...info] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

N = Number(N);
const solution = () => {
  const visited = new Array(N).fill(0).map((e) => new Array(N).fill(false));

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const answer = [];

  const bfs = ([x, y]) => {
    let sum = 1;
    const queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length) {
      const current = queue.shift();
      const [cx, cy] = current;

      for (const [dx, dy] of direction) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
        if (visited[nx][ny]) continue;

        if (info[nx][ny] == "1") {
          visited[nx][ny] = true;
          sum++;
          queue.push([nx, ny]);
        }
      }
    }
    return sum;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && info[i][j] == "1") {
        answer.push(bfs([i, j]));
      }
    }
  }

  answer.sort((a, b) => a - b);
  return [answer.length, ...answer];
};

console.log(solution().join("\n"));
