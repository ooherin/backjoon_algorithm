const arr = [];
const answer = [];
const getNextNumber = (number) => {
  const numberArr = [...String(number)];
  const numberSum = numberArr.reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
  }, 0);
  return number + numberSum;
};

for (let i = 1; i < 10000; i++) {
  const sum = getNextNumber(i);
  if (sum <= 10000) {
    arr.push(sum);
  }
}

for (let i = 1; i < 10000; i++) {
  !arr.includes(i) && answer.push(i);
}

console.log(answer.join("\n"));
