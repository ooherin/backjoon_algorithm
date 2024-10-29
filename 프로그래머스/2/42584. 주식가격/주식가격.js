function solution(prices) {
    const answer = new Array(prices.length).fill(0)
    const stack = [];
    for(let i = prices.length ; i >= 0 ; i--){
        if(i === prices.length ) continue;
        let pointer = stack.length - 1;
        while(pointer >= 0){
            //가격이 스택에 있는 것보다 크면 => 떨어진것 
             if(stack[pointer] < prices[i]){
                 answer[i]++;
                 break;
             }else{
                 answer[i]++;
             }
            pointer--;
        }
        stack.push(prices[i]);
    }
    return answer;
}

    //뒤에서 부터 하나씩 꺼내서
    //스택에 넣기
    //스택에 넣은 것을 하나씩 뺴서 자기자신과 비교
    //자기자신보다 작은게 나오면 멈춤