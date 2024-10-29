const open = ["[", "{", "("];
const close = ["]", "}", ")"];

const parentheses = {
  "[": "]",
  "]": "[",
  "{": "}",
  "}": "{",
  "(": ")",
  ")": "(",
};

function solution(s) {
  let answer = 0;
  const arr = [];

  for (let i = 0; i < s.length - 1; i++) {
    const slicedPart = s.slice(i) + s.slice(0, i);
    if(isRight(slicedPart)) answer++;
  }

  return answer;
}

const isRight = (string) => {
  const stack = [string[0]];

  for (let i = 1; i < string.length; i++) {
    const last = stack.at(-1);
    if (close.includes(string[i]) && parentheses[string[i]] === last) {
      stack.pop();
    } else if (open.includes(string[i])) {
      stack.push(string[i]);
    } else {
      return false;
    }
  }

    if(!stack.length) return true;
  return false;
};
