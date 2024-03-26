function solution(nums) {
  const arr = [...new Set(nums)]; //고유한 숫자 개수 구하기    
return  Math.min(nums.length/2, arr.length);
}