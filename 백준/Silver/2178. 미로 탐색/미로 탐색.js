const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [size, ...maze] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = size.split(" ").map(Number);

const solution = () => {
  const visited = new Array(N).fill(0).map((e) => new Array(M).fill(false));
  const queue = [[1, 1, 1]];
  visited[0][0] = true;

  const directions = [
    [-1, 0], // top
    [1, 0], // bottom
    [0, -1], // left
    [0, 1], // right
  ];

  while (queue.length) {
    const [x, y, steps] = queue.shift();

    if (x == N && y == M) {
      return steps;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx > 0 &&
        ny > 0 &&
        nx <= N &&
        ny <= M &&
        maze[nx - 1][ny - 1] == "1" &&
        !visited[nx - 1][ny - 1]
      ) {
        visited[nx - 1][ny - 1] = true;
        queue.push([nx, ny, steps + 1]);
      }
    }
  }

  return -1;
};

console.log(solution());
