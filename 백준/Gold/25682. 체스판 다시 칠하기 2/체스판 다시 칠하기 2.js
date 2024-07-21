const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [info, ...boards] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [y, x, length] = info.split(" ").map(Number);

// whiteStart와 blackStart 보드 미리 계산
let whiteBoard = Array.from(Array(y), () => Array(x).fill(0));
let blackBoard = Array.from(Array(y), () => Array(x).fill(0));

for (let i = 0; i < y; i++) {
  for (let j = 0; j < x; j++) {
    const expectedWhite = (i + j) % 2 === 0 ? 'W' : 'B';
    const expectedBlack = (i + j) % 2 === 0 ? 'B' : 'W';

    if (boards[i][j] !== expectedWhite) whiteBoard[i][j] = 1;
    if (boards[i][j] !== expectedBlack) blackBoard[i][j] = 1;
  }
}

// 누적 합 배열 생성
const getPrefixSum = (board) => {
  let prefixSum = Array.from(Array(y + 1), () => Array(x + 1).fill(0));
  for (let i = 1; i <= y; i++) {
    for (let j = 1; j <= x; j++) {
      prefixSum[i][j] = board[i - 1][j - 1]
        + prefixSum[i - 1][j]
        + prefixSum[i][j - 1]
        - prefixSum[i - 1][j - 1];
    }
  }
  return prefixSum;
};

const whitePrefixSum = getPrefixSum(whiteBoard);
const blackPrefixSum = getPrefixSum(blackBoard);

// 특정 구간의 누적 합 계산
const getSumInRange = (prefixSum, y1, x1, y2, x2) => {
  return prefixSum[y2][x2] 
    - prefixSum[y1 - 1][x2] 
    - prefixSum[y2][x1 - 1] 
    + prefixSum[y1 - 1][x1 - 1];
};

let answer = Infinity;

for (let i = 1; i <= y - length + 1; i++) {
  for (let j = 1; j <= x - length + 1; j++) {
    const y1 = i, x1 = j;
    const y2 = i + length - 1, x2 = j + length - 1;

    const whiteDiff = getSumInRange(whitePrefixSum, y1, x1, y2, x2);
    const blackDiff = getSumInRange(blackPrefixSum, y1, x1, y2, x2);

    const smallDiff = Math.min(whiteDiff, blackDiff);
    answer = Math.min(answer, smallDiff);
  }
}

console.log(answer);
