const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [cardCount, cards, targetCount, targets] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

cards = cards.split(" ").map(Number);
targets = targets.split(" ").map(Number);

cards.sort((a, b) => a - b);
const countMap = cards.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

const uniqueCards = [...new Set(cards)];

const bs = (target) => {
  let start = 0;
  let end = uniqueCards.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (uniqueCards[mid] === target) {
      return 1;
    }
    if (uniqueCards[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return 0;
};
const answer = [];

targets.forEach((target) => {
  if (bs(target)) {
    answer.push(countMap[target]);
  } else {
    answer.push(0);
  }
});

console.log(answer.join(" "));
