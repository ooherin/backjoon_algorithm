//N과 M(3)
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const solution = () => {
  const visited = new Array(n).fill(false);
  const output = [];
  let answer = "";

  const dfs = (depth) => {
    if (depth === m) {
      answer += `${output.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < n; i++) {
      output.push(i + 1);
      dfs(depth + 1);
      output.pop();
    }
  };

  dfs(0);
  return answer;
};

console.log(solution());
