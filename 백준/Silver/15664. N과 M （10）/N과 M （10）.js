//N과 M(10)
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, m] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [count, length] = n.split(" ").map(Number);
const numbers = m.split(" ").map(Number);

numbers.sort((a, b) => a - b);

const solution = () => {
  let output = [];
  const answer = [];
  const visited = new Array(n).fill(false);

  const dfs = (depth, startIndex) => {
    if (depth === length) {
      answer.push([...output]);
      return;
    }

    for (let i = startIndex; i < count; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;
      output.push(numbers[i]);
      dfs(depth + 1, i);
      output.pop();
      visited[i] = false;
    }
  };
  dfs(0, 0);
  return answer.map((e) => e.join(" "));
};

const unique = new Set(solution());
unique.forEach((e) => {
  console.log(e);
});
