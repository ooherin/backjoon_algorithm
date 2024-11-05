//바이러스는 상하좌우로 퍼지기 가능
//벽 3개를 세워야함
//바이러스가 가장 많이 퍼지는 곳부터 막는다.
//안전 영역의 최대 크기 구하기

//1. 바이러스가 있는 곳에서 최대로 퍼질 수 있는 경우를 저장한다.
//2. 바이러스의 상하좌우를 막아 최대 안전 영역을 구한다

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [[N, M], ...areas] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map((e) => Number(e)));

const Direction = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

//벽의 개수 조합을 위한 조합 함수
const combination = (arr, n) => {
  if (n === 1) return arr.map((e) => [e]);
  const answer = [];
  arr.forEach((fixed, index) => {
    const rest = [...arr.slice(index + 1)];
    const restCombination = combination(rest, n - 1);
    const fullCombination = restCombination.map((combi) => [fixed, ...combi]);
    answer.push(...fullCombination);
  });
  return answer;
};

const safeGrounds = [];

//안전한 영역 넣기
areas.forEach((line, i) => {
  line.forEach((area, j) => {
    if (area === 0) {
      safeGrounds.push([i, j]);
    }
  });
});

//안전한 영역 3개를 활용해 3개의 만든 3개의 벽 조합
const wallCombinations = combination(safeGrounds, 3);

//최대 안전영역 개수 (정답)
let maxSafeGroundsCount = 0;

//바이러스를 퍼뜨리기 위한 bfs
const bfs = (startY, startX, grounds) => {
  const visited = new Array(N).fill(0).map((e) => new Array(M).fill(0));
  const queue = [[startY, startX]];
  visited[startY][startX] = true;

  while (queue.length) {
    const [cy, cx] = queue.shift();
    for (const [dy, dx] of Direction) {
      const [ny, nx] = [dy + cy, dx + cx];
      if (ny >= 0 && ny < N && nx >= 0 && nx < M && !visited[ny][nx]) {
        if (grounds[ny][nx] === 0) {
          grounds[ny][nx] = 2;
          queue.push([ny, nx]);
        }
      }
    }
  }
};

//벽조합 3개를 사용해서 시뮬레이션
wallCombinations.forEach((combi) => {
  let grounds = JSON.parse(JSON.stringify(areas));
  combi.forEach(([i, j]) => {
    grounds[i][j] = 1;
  });

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      //벽을 세운뒤 바이러스 퍼뜨리기
      const current = grounds[i][j];
      if (current === 2) {
        bfs(i, j, grounds);
      }
    }
  }

  let safeGroundsCount = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const current = grounds[i][j];
      if (current === 0) {
        safeGroundsCount++;
      }
    }
  }

  maxSafeGroundsCount = Math.max(maxSafeGroundsCount, safeGroundsCount);
});

console.log(maxSafeGroundsCount);
