const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...meetings] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

meetings = meetings.map((e) => e.split(" ").map(Number));

meetings.sort((a, b) => {
  //끝나는 시간이 같은 경우
  if (a[1] === b[1]) {
    //시작하는 시간이 더 커야 함
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let answer = 0;
let current = 0;

meetings.forEach((meeting) => {
  const [start, end] = meeting;
  if (start >= current) {
    answer++;
    current = end;
  }
});

console.log(answer);
