const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [count, ...numbersArr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

count = Number(count);
numbersArr = numbersArr.map((numbers) => numbers.split(" ").map(Number));

const graphs = Array.from({ length: count + 1 }, () => []);

numbersArr.forEach((numbers) => {
  const [a, b] = numbers;
  graphs[a].push(b);
  graphs[b].push(a);
});

const parents = Array.from({ length: count + 1 }, () => 0);
const visited = Array.from({ length: count + 1 }, () => false);
const dfs = () => {
  const stack = [1];
  while (stack.length) {
    const current = stack.pop();

    graphs[current].forEach((child) => {
      if (!visited[child]) {
        parents[child] = current;
        visited[child] = true;
        stack.push(child);
      }
    });
  }
};

dfs();

console.log(parents.splice(2).join("\n"));
