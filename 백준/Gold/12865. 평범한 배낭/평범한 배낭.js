const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [[count, weightLimit], ...items] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const dp = new Array(weightLimit + 1).fill(0);

//아이템이 있는 경우 (전체 - 현재 무게의 최댓값) dp 를 무조건 돈다.
//즉 어쩄든 가장 큰 무게에서 현재 무게로 진행하기 때문에
//결과적인 최댓값을 구할 수 있다.

//큰 무게에서 작은 무게로 진행하는 이유는
//아이템이 딱 한번만 사용되도록 하기 위해서이다.

//아이템을 반복문 돌면서 딱 한번씩만 쓰는데
//현재 dp 에 저장된 값과
//현재 아이템의 무게를 대체했을 때 의 최댓값을 비교해서
//더 큰 값을 저장한다.
for (let i = 0; i < items.length; i++) {
  const [weight, value] = items[i];
  for (let j = weightLimit; j >= weight; j--) {
    dp[j] = Math.max(dp[j], dp[j - weight] + value);
  }
}

console.log(Math.max(...dp));
