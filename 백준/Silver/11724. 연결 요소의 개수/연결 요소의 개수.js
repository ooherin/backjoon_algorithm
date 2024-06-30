const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [size, ...lines] = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = size.split(' ').map(Number);
const graph = Array.from({ length: N }, () => []);
const visited = new Array(N).fill(false);

// 인접 리스트 생성
lines.forEach(line => {
  const [u, v] = line.split(' ').map(Number);
  graph[u - 1].push(v - 1);
  graph[v - 1].push(u - 1);
});

const bfs = (start) => {
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const current = queue.shift();

    graph[current].forEach(next => {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    });
  }
};

let answer = 0;
for (let i = 0; i < N; i++) {
  if (!visited[i]) {
    bfs(i);
    answer++;
  }
}

console.log(answer);
