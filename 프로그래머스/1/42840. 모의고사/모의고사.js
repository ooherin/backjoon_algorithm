function solution(answers) {
    const answer = [0,0,0];
    
const patterns = [[
    1,2,3,4,5
],[
    2,1,2,3,2,4,2,5
],[
    3,3,1,1,2,2,4,4,5,5
]]

    for(let i = 0 ; i < patterns.length; i++){
        for(let j = 0 ;  j < answers.length ; j++){
            if(answers[j] === patterns[i][j % patterns[i].length]){
                answer[i]++;
            }
        }
    }
    
    const maxScore = Math.max(...answer);
    
    return answer.reduce((acc,cur,index) => {
        if(cur === maxScore){
            acc.push(index + 1);
        }
                    return acc;
    },[]).sort((a,b) => a - b)
}
