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

  const dfs = (startIndex, depth) => {
    if (depth === m) {
      answer += `${output.join(" ")}\n`;
      return;
    }

    for (let i = startIndex; i < n; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;
      output.push(i + 1);
      dfs(i, depth + 1);
      output.pop();
      visited[i] = false;
    }
  };

  dfs(0, 0);
  return answer;
};

console.log(solution());