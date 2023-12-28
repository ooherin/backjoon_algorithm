//2번째 정답 풀이
function solution(n, left, right) {
 let arr = [];
  for(let i = left; i <= right; i++){
      //0 ~ 2
      // 3 ~ 5
      //123 223 333
      //그냥 123 하고 나서 배열의 index +! 가 높으면 그걸로 하기 
      let original = i % n + 1;
      let arrIdx = Math.floor(i / n) + 1 ;
      let element  = Math.max(original, arrIdx);
      arr.push(element)
  }
  return arr 
}

//처음 풀이 (그냥 2차원 배열 만들어서 메모리 초과됨 )

function solution(n, left, right) {
  let totalArr = Array(n)
    .fill(0)
    .map((_) => Array(n).fill(n));
  for (let i = n - 1; i > 0; i--) {
    totalArr = totalArr.map((arr, arrIdx) => {
      if (arrIdx < i) {
        return arr.map((el, idx) => {
          if (idx < i) {
            return i;
          }
          return el;
        });
      } else {
        return arr;
      }
    });
  }
  return totalArr.flat().slice(left, right + 1);
}

