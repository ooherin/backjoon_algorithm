function solution(elements) {
    let answerArr = [];
    let dp= [];
    let elementArr = [...elements];
    let count = 0;
    while(count !== elements.length){
     dp[0] = elementArr[0]; 
     for(let i = 1; i< elementArr.length; i++){
        dp[i] = dp[i-1] + elementArr[i];
     }
        answerArr.push(...dp);
        dp = [];
        const firstEl = elementArr.shift();
        elementArr.push(firstEl);
        count++;
    }
    
 
    const set = new Set(answerArr);
    return set.size;
}