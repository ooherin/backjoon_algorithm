function solution(n) {
    var answer = [];
    
    const hanoi = (n, start,end,aux) => {
        if(n === 1){
            answer.push([start,end]);
            return;
        }
        hanoi(n - 1,start,aux,end);
        answer.push([start,end]);
        hanoi(n-1,aux,end,start);    
    }
    
    hanoi(n,1,3,2)
    return answer;
}