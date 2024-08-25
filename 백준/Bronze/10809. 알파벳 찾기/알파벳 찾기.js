const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString();

const locations = new Array(26).fill(0).map((e, i) => i + 97);
const answer = new Array(26).fill(0).map((e) => -1);

[...input].forEach((e, i) => {
  const targetIndex = locations.findIndex(
    (location) => location === e.charCodeAt()
  );
  if (answer[targetIndex] === -1) {
    answer[targetIndex] = i;
  }
});

console.log(answer.join(" "));