const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [size, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const whiteFirst = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackFirst = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const [x, y] = size.split(" ").map(Number);

const checkWhiteFirst = (x, y) => {
  let answer = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== whiteFirst[i][j]) answer++;
    }
  }
  return answer;
};

const checkBlackFirst = (x, y) => {
  let answer = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== blackFirst[i][j]) answer++;
    }
  }
  return answer;
};

const answers = [];
for (let i = 0; i < x - 7; i++) {
  for (let j = 0; j < y - 7; j++) {
    const whiteAnswer = checkWhiteFirst(i, j);
    const blackAnswer = checkBlackFirst(i, j);
    answers.push(Math.min(whiteAnswer, blackAnswer));
  }
}

console.log(Math.min(...answers));
