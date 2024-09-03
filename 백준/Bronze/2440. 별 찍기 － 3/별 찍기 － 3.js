let input = require("fs").readFileSync("/dev/stdin").toString().trim();

for (let i = Number(input); i >= 1; i--) {
	console.log("*".repeat(i));
}