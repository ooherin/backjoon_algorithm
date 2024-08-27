const directions = [
  [0, -1],
  [0, 1],
  [1, 0],
  [-1, 0],
];

function solution(maps) {
  //x축 길이
  const N = maps[0].length;
  //y축 길이
  const M = maps.length;

  let answer = -1;
  const newMaps = [new Array(N).fill(0), ...maps].map((line) => [0, ...line]);
  const visited = Array.from({ length: M + 1 }, () => Array(N + 1).fill(false));

  const queue = [[1, 1, 1]];
  while (queue.length) {
    const [cy, cx, count] = queue.shift();

    for (const direction of directions) {
      const [dx, dy] = direction;
      const nx = dx + cx;
      const ny = dy + cy;

      if (ny === M && nx === N) {
        return count + 1;
      }

      if (
        ny >= 1 &&
        ny <= M &&
        nx >= 1 &&
        nx <= N &&
        newMaps[ny][nx] === 1 &&
        !visited[ny][nx]
      ) {
        queue.push([ny, nx, count + 1]);
        visited[ny][nx] = true;
      }
    }
  }

  return answer;
}

