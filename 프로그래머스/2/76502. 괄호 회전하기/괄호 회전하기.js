function solution(s) {
  if(s.length % 2 === 1) return 0;

  let answer = 0 ;
  const mapping = { "}" : "{", "]" : "[", ")" : "("};
  for(let i = 0 ; i < s.length ; i++){
      const reversed = s.slice(i) + s.slice(0,i);
      
      let flag = true;
      const stack = [];
      for(let i = 0; i < reversed.length; i++){
          if(Object.values(mapping).includes(reversed[i])){
              stack.push(reversed[i])
          }else{
              const last = stack.pop();
              if(last !== mapping[reversed[i]]){
                 flag = false;
                  break;
              }
          }
      }
      if(flag) answer++;
  }
  return answer;
}