const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [[N, M], ...grounds] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

if (N === 1) return console.log(0);

const combination = (arr, n) => {
  if (n === 1) return arr.map((e) => [e]);
  const answer = [];
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(index + 1)];
    const restCombination = combination(rest, n - 1);
    const fullCombination = restCombination.map((e) => [fixed, ...e]);
    answer.push(...fullCombination);
  });
  return answer;
};
const virusStartGrounds = [];
const pureGrounds = [];
//특정 위치에 바이러스를 M개 놓을 수 있음
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (grounds[i][j] === 2) {
      virusStartGrounds.push([i, j]);
    }
    if (grounds[i][j] === 0) {
      pureGrounds.push([i, j]);
    }
  }
}

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const bfs = (startSpots, visited, leftPureGrounds, currentGrounds) => {
  let queue = [...startSpots];

  startSpots.forEach((spot) => {
    const [y, x] = spot;
    visited[y][x] = true;
  });

  let count = 0;

  while (queue.length) {
    const nextQueue = [];

    //queue에 넣은 요소들을 모두 순회
    //만약 큐를 하나씩 shift 해서 한다면 다음 queue가 해당 요소 하나씩 탐색한걸로 갈아치워짐 => 모든 요소를 한꺼번에 순회에서 탐색하지 못함
    for (const [cy, cx] of queue) {
      for (const [dy, dx] of directions) {
        const [ny, nx] = [dy + cy, dx + cx];
        if (ny >= 0 && ny < N && nx >= 0 && ny < N && !visited[ny][nx]) {
          visited[ny][nx] = true;
          if (currentGrounds[ny][nx] === 0) {
            leftPureGrounds--;
            //바로 검사해서 count를 반환
            if (leftPureGrounds === 0) return count + 1;
            nextQueue.push([ny, nx]);
          }
        }
      }
    }

    //순회한 뒤에 한번에 새로운 탐색할 위치를 저장한 큐로 갈아치움
    queue = nextQueue;
    count++;
  }
  return Infinity;
};

let answer = Infinity;

//동시에 시작점에서 바이러스를 퍼트려야 함
combination(virusStartGrounds, M).forEach((spots) => {
  let currentGrounds = JSON.parse(JSON.stringify(grounds));
  let leftPureGrounds = pureGrounds.length + virusStartGrounds.length - M;
  if (leftPureGrounds === 0) return (answer = 0);

  //선택되지 않은 바이러스 가능한 칸 일반땅으로 돌리기
  virusStartGrounds.forEach((e) => {
    if (!spots.some((spot) => spot[0] === e[0] && spot[1] === e[1])) {
      currentGrounds[e[0]][e[1]] = 0;
    }
  });

  let visited = new Array(N).fill(0).map((e) => new Array(N).fill(false));
  const count = bfs(spots, visited, leftPureGrounds, currentGrounds);
  answer = Math.min(answer, count);
});

if (answer == Infinity) answer = -1;

console.log(answer);
//바이러스가 퍼지는 최소 시간을 출력

//우선 빈칸에서 바이러스가 선택될 수 있는 칸을 구하고
//경우의 수에 따라서 bfs로 바이러스를 퍼트리기
//다 퍼트릴 때까지 최소 시간을 출력한다.
//어떻게 놓아도 바이러스를 다 퍼트릴 수 없다면 -1를 출력한다.
