const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const exampleCounts = Number(input.shift());

for (let i = 0; i < exampleCounts; i++) {
  let [count, index] = input.shift().split(" ").map(Number);
  let documents = input.shift().split(" ").map(Number);
  let queue = documents.map((priority, idx) => ({ index: idx, priority }));
  let answer = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    if (queue.some((e) => e.priority > current.priority)) {
      queue.push(current);
    } else {
      answer++;
      if (current.index === index) {
        console.log(answer);
        break;
      }
    }
  }

  answer++;
}