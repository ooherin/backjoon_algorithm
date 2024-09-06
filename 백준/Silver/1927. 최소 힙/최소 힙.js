const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [count, ...commands] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number)[0]);

class Heap {
  constructor() {
    this.arr = [];
  }

  swap(index, changeIndex) {
    const temp = this.arr[index];
    this.arr[index] = this.arr[changeIndex];
    this.arr[changeIndex] = temp;
  }

  #reheapUp(index) {
    if (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.arr[index] < this.arr[parentIndex]) {
        this.swap(index, parentIndex);
        this.#reheapUp(parentIndex);
      }
    }
  }

  #reheapDown(index) {
    const leftIndex = index * 2 + 1; //왼쪽 자식 인덱스
    const rightIndex = index * 2 + 2; //오른쪽 자식 인덱스
    let smaller = index;

    //왼쪽 자식이 존재하고, 자식 요소보다 작은 경우
    if (
      leftIndex < this.arr.length &&
      this.arr[leftIndex] < this.arr[smaller]
    ) {
      smaller = leftIndex;
    }

    //오른쪽 자식이 존재하고, 자식 요소보다 작은 경우
    if (
      rightIndex < this.arr.length &&
      this.arr[rightIndex] < this.arr[smaller]
    ) {
      smaller = rightIndex;
    }

    if (smaller !== index) {
      this.swap(index, smaller);
      this.#reheapDown(smaller);
    }
  }

  insert(value) {
    const index = this.arr.length; //맨 뒤에 요소 추가
    this.arr[index] = value;
    this.#reheapUp(index);
  }

  minRemove() {
    if (this.arr.length === 0) {
      return 0;
    }
    if (this.arr.length === 1) {
      return this.arr.pop();
    }

    const root = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.#reheapDown(0);
    return root;
  }
}

const heap = new Heap();

const answer = [];

for (let i = 0; i < commands.length; i++) {
  if (commands[i] === 0) {
    answer.push(heap.minRemove());
  } else {
    heap.insert(commands[i]);
  }
}

console.log(answer.join("\n"));
