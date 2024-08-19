const input = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const answer = input.map((v) => {
		v = v.trim().split(' ');
		const [name, age, weight] = v;
		if (Number(age) > 17 || Number(weight) >= 80) {
			return `${name} Senior`;
		} else {
			return `${name} Junior`;
		}
	});

answer.pop();
console.log(answer.join('\n'));