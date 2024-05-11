function solution(k, tangerine) {
    let answer = 0;
    let total = 0;
    let obj = tangerine.reduce((acc,cur)=>{
        acc[cur]  =  (acc[cur] || 0 ) + 1;
        return acc;
    },{})
   const sortedObj = Object.values(obj).sort((a,b) =>  b- a);
 
   for(let i = 0; i < sortedObj.length; i++){
       if(total >= k) break;
       answer++;
       total += sortedObj[i];
   }
    return answer; 
}