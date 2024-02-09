function solution(topping) {
    let answer = 0;
    let topping1 = {};
    let topping2 = {};
    let topping1Count = new Set(topping).size;
    let topping2Count = 0;
    
    //토핑을 1에 다 옮기기
    topping1 = topping.reduce((acc,cur) => {
        acc[cur] = (acc[cur] || 0 ) +1;
        return acc;
    },{})
    
    //순회하면서 2에 하나씩 옮기기
    topping.forEach((e) => {
      
            if(topping1[e] === 1){
                delete topping1[e];
                topping1Count = topping1Count - 1;
            }else{
                topping1[e] = topping1[e] -1;
            }
        
        if(!topping2[e]){
            topping2Count = topping2Count + 1;
        }
        topping2[e] = (topping2[e] || 0) + 1;
        
        if(topping1Count === topping2Count){
            answer++;
        }
    })
    return answer;
}