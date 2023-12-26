function solution(k, tangerine) {
    var answer = 0;
    let obj = tangerine.reduce((acc,cur)=>{
        acc[cur]  =  (acc[cur] || 0 ) + 1;
        return acc;
    },{})
    let arr = Object.values(obj).sort((a,b) => b-a);
    let total = 0;
    while(total < k){
        total += arr[answer];
        answer++
    }
    return answer;
}