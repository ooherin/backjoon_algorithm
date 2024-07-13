const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [cardCount, cards, targetCount, targets] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

cardCount = Number(cardCount);
targetCount = Number(targetCount);

cards = cards.split(" ").map(Number);
targets = targets.split(" ").map(Number);

cards.sort((a, b) => a - b);

const bs = (target) => {
  let start = 0;
  let end = cardCount - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (target === cards[mid]) return 1;
    if (target > cards[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return 0;
};

const answer = [];
for (const target of targets) {
  answer.push(bs(target));
}

console.log(answer.join(" "));
