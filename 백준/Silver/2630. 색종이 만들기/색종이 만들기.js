const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...inputs] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

inputs = inputs.map((e) => e.split(" ").map(Number));

const isMixed = (arr, x, y, size) => {
  let color = arr[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (color !== arr[i][j]) {
        return -1;
      }
    }
  }
  return color;
};

const solution = (arr, n) => {
  let answer = [0, 0];

  const divide = (length, dx, dy) => {
    const color = isMixed(arr, dx, dy, length);
    if (color !== -1) {
      answer[color]++;
      return;
    }

    const newLength = length / 2;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        divide(newLength, dx + i * newLength, dy + j * newLength);
      }
    }
  };

  divide(n, 0, 0);

  return answer;
};

const result = solution(inputs, n);
console.log(result[0]);
console.log(result[1]);
