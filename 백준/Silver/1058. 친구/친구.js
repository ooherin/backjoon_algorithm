const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...people] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

people = people.map((person) => person.split(""));

let max = 0;

people.forEach((arr, i) => {
  const temp = [];
  arr.forEach((e, index) => {
    if (e === "Y") {
      temp.push(index);
    }
  });

  let list = new Set(temp);

  //해당하는 인덱스의 상대 인덱스를 모두 저장한다.
  temp.forEach((index) => {
    people[index].forEach((e, j) => {
      if (e === "Y") {
        list.add(j);
      }
    });

    //현재 요소는 제외한다.
    list.delete(i);
  });

  let count = list.size;
  max = Math.max(max, count);
});

console.log(max);