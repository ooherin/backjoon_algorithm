const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let info = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const [N, M] = info.shift();

let graphs = [];

for (let i = 0; i < N; i++) {
  graphs.push(info.shift());
}

graphs = [[...new Array(M + 1).fill(0)], ...graphs.map((e) => [0, ...e])];

let prefixSum = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    prefixSum[i][j] =
      graphs[i][j] +
      prefixSum[i - 1][j] +
      prefixSum[i][j - 1] -
      prefixSum[i - 1][j - 1];
  }
}

const getTotalPrefix = (x1, y1, x2, y2) => {
  return (
    prefixSum[x2][y2] -
    prefixSum[x2][y1 - 1] -
    prefixSum[x1 - 1][y2] +
    prefixSum[x1 - 1][y1 - 1]
  );
};

const questionCount = info.shift();

for (let i = 0; i < questionCount; i++) {
  const [x1, y1, x2, y2] = info[i];
  console.log(getTotalPrefix(x1, y1, x2, y2));
}
