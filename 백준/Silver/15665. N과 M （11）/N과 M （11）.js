const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, m] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [count, length] = n.split(" ").map(Number);
const numbers = m.split(" ").map(Number);
const unique = [...new Set(numbers)];

unique.sort((a, b) => a - b);

const solution = () => {
  const output = [];
  let result = "";

  const dfs = (depth) => {
    if (depth === length) {
      result += `${output.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < unique.length; i++) {
      output.push(unique[i]);
      dfs(depth + 1);
      output.pop();
    }
  };

  dfs(0);
  return result;
};

console.log(solution());
