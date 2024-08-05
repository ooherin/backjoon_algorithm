const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, M] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const moves = (x) => [x - 1, x + 1, 2 * x];

const visit = Array.from({ length: 100001 }, () => false);
const distance = Array.from({ length: 100001 }, () => -1);

visit[N] = 1;
distance[N] = 0;

const bfs = () => {
  const queue = [N];

  while (queue.length) {
    const current = queue.shift();

    if (current === M) {
      return distance[current];
    }

    for (const move of moves(current)) {
      if (move >= 0 && move <= 100000 && !visit[move]) {
        visit[move] = true;
        distance[move] = distance[current] + 1;
        queue.push(move);
      }
    }
  }
};

const result = bfs();
console.log(result);
