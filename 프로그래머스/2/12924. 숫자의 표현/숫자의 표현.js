function solution(n) {
    //1을 제외한 약수 구하기 
    //홀수일 경우 +1
    //19
    //1. 19
//약수 중 홀수인 것의 개수
    //자기자신이 홀수라면 + 1
    //1은 제외? 
    var answer = 0;
    let arr = [];
    for(let i = 1 ; i <= n ; i++){
        if(n % i  === 0 && i % 2 === 1){
            arr.push(i)
        }
    }
   
    return arr.length;
}