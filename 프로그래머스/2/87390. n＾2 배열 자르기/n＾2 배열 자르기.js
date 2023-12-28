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
