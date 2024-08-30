let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

input = Number(input);

const solution = () => {
  let permutation = [];
  const visited = new Array(input + 1).fill(false);

  const dfs = (depth) => {
    if (depth === input) {
      const answer = [...permutation].join(" ");
      console.log(answer);
    }

    for (let i = 1; i <= input; i++) {
      if (visited[i]) continue;
      permutation.push(i);
      visited[i] = true;
      dfs(depth + 1);
      permutation.pop(i);
      visited[i] = false;
    }
  };

  dfs(0);
};

solution();
