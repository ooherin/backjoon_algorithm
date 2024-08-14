const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [count, ...commands] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

class Queue {
  constructor() {
    this.array = [];
  }
  push(e) {
    this.array.push(e);
  }
  pop() {
    return this.array.length ? this.array.shift() : -1;
  }
  size() {
    return this.array.length;
  }
  empty() {
    return this.array.length ? 0 : 1;
  }
  front() {
    return this.array[0] ?? -1;
  }
  back() {
    return this.array.at(-1) ?? -1;
  }
}

const queue = new Queue();
const answer = [];

commands.forEach((command) => {
  const [name, number] = command.split(" ");

  let result;
  if (name === "push") return queue.push(number);

  result = queue[name]();
  if (typeof result !== "undefined") answer.push(result);
});

console.log(answer.join("\n"));
