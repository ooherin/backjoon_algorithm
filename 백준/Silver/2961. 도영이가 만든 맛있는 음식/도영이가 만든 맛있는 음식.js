const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [count, ...taste] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

count = parseInt(count);
taste = taste.map((line) => line.split(" ").map(Number));

let answer = Number.MAX_SAFE_INTEGER;

//depth : 몇번쨰 메뉴를 보고 있는지
const dfs = (depth, totalSour, totalBitter, used) => {
  //현재 메뉴를 사용하는 경우 => 마지막에 이 값을 쓸 건지 안 쓸 건지 알기
  if (depth === count) {
    if (used) {
      answer = Math.min(answer, Math.abs(totalSour - totalBitter));
    }
    return;
  }

  //이 메뉴를 안쓴다고 가정
  dfs(depth + 1, totalSour, totalBitter, used);

  //이 메뉴를 쓴다고 가정
  const [sour, bitter] = taste[depth];
  totalSour *= sour;
  totalBitter += bitter;
  dfs(depth + 1, totalSour, totalBitter, true);
};

dfs(0, 1, 0, false);

console.log(answer);
