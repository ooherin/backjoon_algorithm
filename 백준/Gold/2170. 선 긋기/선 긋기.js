const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...numbers] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

N = Number(N);

numbers = numbers
  .map((number) => number.split(" ").map(Number))
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

//[start, end]
//[currentStart, currentEnd]

//currentEnd가 end보다 작으면 무시한다.
//currentStart가 end보다 크면 모두 더한다.
//currentStart가 end보다 작으면 이어서 그린다.

let dot = [numbers[0][0], numbers[0][1]];
let lineLength = numbers[0][1] - numbers[0][0];

let [start, end] = dot;

for (let i = 1; i < numbers.length; i++) {
  let [currentStart, currentEnd] = numbers[i];
  if (currentEnd <= end) {
    continue;
  } else if (currentStart > end) {
    lineLength += currentEnd - currentStart;
    start = currentStart;
    end = currentEnd;
  } else {
    lineLength += currentEnd - end;
    end = currentEnd;
  }
}

console.log(lineLength);
