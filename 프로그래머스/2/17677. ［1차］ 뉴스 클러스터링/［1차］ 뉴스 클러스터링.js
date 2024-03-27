function solution(str1, str2) {
  var answer = 0;
  const oneResult = sliceStr(str1);
  const twoResult = sliceStr(str2);
    
  let inner = 0;
  let outer = 0;
    
  const outerKeys = [...new Set([...Object.keys(oneResult),...Object.keys(twoResult)])];
  
 const innerKeys = Object.keys(oneResult).filter((key) => {
     return Object.keys(twoResult).includes(key);
 }) 
 
 innerKeys.forEach((key) => {
     inner += Math.min(oneResult[key], twoResult[key]);
 })
    
  outerKeys.forEach((key) => {
      outer += Math.max(oneResult[key] || 0, twoResult[key] || 0);
  })
   
  const sum = Object.assign(oneResult, twoResult);

  if(inner === 0 && outer === 0)
     return 65536;
    
     return Math.floor((inner/outer * 65536));
}

function sliceStr(str) {
  const result = {};
  const toUpper = str.toUpperCase();
  for (let i = 0; i < toUpper.length - 1; i++) {
    const sliced = toUpper.slice(i, i + 2);
    const regex = /^[a-zA-Z]{2}$/
    if (regex.test(sliced)) {
      result[sliced] = (result[sliced] || 0) + 1 
    }
  }
  return result;
}
