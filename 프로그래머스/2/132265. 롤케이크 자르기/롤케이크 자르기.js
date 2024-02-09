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

//처음 알고리즘 : topping1Count, topping2Count를 먼저 선언하는 게 아니라, 매번 반복할 때마다 변수를 만들어 length를 세주는 것
//시간 초과 
//불필요한 객체 생성 및 삭제: 매 반복마다 topping1과 topping2의 크기를 계산하고, 
//객체의 추가 및 삭제가 반복됩니다. 이는 메모리 및 연산 비용을 증가시킵니다.
//객체의 키의 개수가 많다면 충분히 메모리 증가..
    const topping1Count = Object.keys(topping1).length
    const topping2Count = Object.keys(topping2).length
    if(topping1Count === topping2Count){
        answer++;}
