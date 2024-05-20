const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let a = require("fs").readFileSync(filePath).toString().trim().split("\n");

a.pop();

const isSameWord = (str) => {
  let answer = true;
  while (str.length >= 2) {
    const first = str.shift();
    const last = str.pop();

    if (first !== last) {
      answer = false;
      break;
    }
  }
  return answer;
};

a.forEach((word) => {
  console.log(isSameWord([...word]) ? "yes" : "no");
});
