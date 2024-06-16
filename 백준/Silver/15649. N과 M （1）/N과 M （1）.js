const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const solution = (n, m) => {
  let result = "";
  const output = [];
  const visited = new Array(n).fill(false);

  const dfs = (depth) => {
    //이게 충족될때까지 실행
    if (depth === m) {
      result += `${output.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i] === true) continue;
      output.push(i + 1);
      visited[i] = true;
      dfs(depth + 1);
      //만약 마지막 숫자까지 꽉 채웠으면
      //그 다음으로 넘어갈 준비
      output.pop();
      visited[i] = false;
    }
  };

  dfs(0);
  return result;
};

console.log(solution(n, m));
