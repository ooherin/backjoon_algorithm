const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, m] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [count, length] = n.split(" ").map(Number);
const numbers = m.split(" ").map(Number);

numbers.sort((a, b) => a - b);

const solution = () => {
  const visited = new Array(count).fill(0);
  const output = [];
  let answer = "";

  const dfs = (depth) => {
    if (depth === length) {
      answer += `${output.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < count; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;
      output.push(numbers[i]);
      dfs(depth + 1);
      output.pop();
      visited[i] = false;
    }
  };
  dfs(0);
  return answer;
};

console.log(solution());
