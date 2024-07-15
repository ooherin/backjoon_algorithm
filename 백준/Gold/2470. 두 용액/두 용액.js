const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, numbers] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

numbers = numbers.split(" ").map(Number);

numbers.sort((a, b) => a - b);

const bs = (excludeIndex) => {
  const target = -numbers[excludeIndex];
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    if (start === excludeIndex) start++;
    if (end === excludeIndex) end--;
    if (start > end) break;

    const mid = Math.floor((start + end) / 2);
    if (target === numbers[mid]) return numbers[mid];
    if (target > numbers[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  const candidates = [];
  if (start < n && start !== excludeIndex) {
    candidates.push(numbers[start]);
  }
  if (end >= 0 && end !== excludeIndex) {
    candidates.push(numbers[end]);
  }

  if (candidates.length === 0) return numbers[excludeIndex];

  let closest = candidates[0];
  let closestDiff = Math.abs(target - closest);

  candidates.forEach((candidate) => {
    const diff = Math.abs(candidate - target);
    if (diff < closestDiff) {
      closest = candidate;
      closestDiff = diff;
    }
  });

  return closest;
};

let answer;
let minDiff = Infinity;

for (let i = 0; i < n; i++) {
  const current = numbers[i];
  const pair = bs(i);

  const currentDiff = Math.abs(current + pair);
  if (currentDiff < minDiff) {
    minDiff = currentDiff;
    answer = [current, pair];
  }
}

console.log(answer.sort((a, b) => a - b).join(" "));
