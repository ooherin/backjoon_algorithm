const [t, ...arr] = require("fs").readFileSync(0).toString().trim().split("\n");
for (let str of arr) {
	console.log( str[0] + str[str.length-1] );
}