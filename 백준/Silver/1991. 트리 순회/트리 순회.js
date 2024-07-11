const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...graphs] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

graphs = graphs.map((graph) => graph.split(" "));

const pre = () => {
  const stack = [graphs[0]];
  let answer = "";

  while (stack.length) {
    const [root, left, right] = stack.pop();
    answer += root;

    if (right !== ".") {
      const target = graphs.find((e) => e[0] === right);
      stack.push(target);
    }

    if (left !== ".") {
      const target = graphs.find((e) => e[0] === left);
      stack.push(target);
    }
  }

  return answer;
};

console.log(pre());

const medi = () => {
  const stack = [];
  let answer = "";
  //루트 노드 부터 시작
  let current = graphs[0];

  //왼쪽 노드가 없을 때까지 이동
  while (stack.length || current) {
    while (current) {
      stack.push(current);
      const [root, left, right] = current;
      if (left !== ".") {
        const target = graphs.find((e) => e[0] === left);
        current = target;
      } else {
        current = null;
      }
    }

    //왼쪽 자식이 없으면 루트 노드를 처리
    current = stack.pop();
    const [root, _, right] = current;
    answer += root;

    if (right !== ".") {
      const target = graphs.find((e) => e[0] === right);
      current = target;
    } else {
      current = null;
    }
  }
  return answer;
};

console.log(medi());

const end = () => {
  const stack = [graphs[0]];
  let answer = ""; //루트 노드 부터 시작

  const visited = [];

  while (stack.length) {
    const [root, left, right] = stack.pop();
    visited.push(root);

    if (left !== ".") {
      const target = graphs.find((e) => e[0] === left);
      stack.push(target);
    }

    if (right !== ".") {
      const target = graphs.find((e) => e[0] === right);
      stack.push(target);
    }
  }

  while (visited.length) {
    const current = visited.pop();
    answer += current;
  }
  return answer;
};

console.log(end());
