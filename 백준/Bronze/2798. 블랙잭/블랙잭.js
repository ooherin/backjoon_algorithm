const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
const N = +input[0].shift();
const M = +input.shift();
let sum = 0;
let maxSum = 0;

for (let i = 0; i < N - 2; i++) {
	for (let j = i + 1; j < N - 1; j++) {
		for (let k = j + 1; k < N; k++) {
			sum = input[0][i] + input[0][j] + input[0][k];
			if (sum <= M && sum > maxSum) {
				maxSum = sum;
            }
        }
    }
}
console.log(maxSum);