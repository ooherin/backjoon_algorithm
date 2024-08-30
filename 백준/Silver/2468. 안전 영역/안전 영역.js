let [length, ...areas] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let numbers = new Set();
length = Number(length);

areas = areas.map((area) => area.split(" ").map(Number));

areas.forEach((area) => area.forEach((e) => numbers.add(e)));

numbers = [0, ...numbers].sort((a, b) => a - b);

const directions = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const findSafeZone = (map) => {
  let count = 0;
  const visited = new Array(length)
    .fill(0)
    .map((e) => new Array(length).fill(false));

  map.forEach((line, y) => {
    line.forEach((e, x) => {
      if (visited[y][x]) return;

      if (e === false) {
        const queue = [[x, y]];
        visited[y][x] = true;

        while (queue.length) {
          const [cx, cy] = queue.shift();

          for (const [dx, dy] of directions) {
            const nx = cx + dx;
            const ny = cy + dy;
            if (
              nx >= 0 &&
              nx < length &&
              ny >= 0 &&
              ny < length &&
              !visited[ny][nx] &&
              !map[ny][nx]
            ) {
              visited[ny][nx] = true;
              queue.push([nx, ny]);
            }
          }
        }
        count++;
      }
    });
  });
  return count;
};

const counts = [];
for (let i = 0; i < numbers.length; i++) {
  const waterFilledMap = areas
    .map((line) => line.slice())
    .map((line) => {
      return line.map((e) => !!(e <= numbers[i]));
    });
  const count = findSafeZone(waterFilledMap);
  counts.push(count);
}

console.log(Math.max(...counts));
