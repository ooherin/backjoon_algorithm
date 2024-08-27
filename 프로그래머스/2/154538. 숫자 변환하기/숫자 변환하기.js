function solution(x, y, n) {
    const queue = [[y,0]];
    let answer = -1;

    //뒤에 push 되는 것이 앞에 것보다 count 가 무조건 큼
    //앞에거부터 검사하니까 count가 가장 작은 것 중 조건 만족하는게 답
    while(queue.length){
        const [target, count] = queue.shift();
        if(target === x){
            answer = count;
            break;
        }
        if(target % 2 === 0){
            queue.push([target / 2,count + 1])
        }
        if(target % 3 === 0){
            queue.push([target / 3, count + 1])
        }  
        if(target - n >= x){
            queue.push([target - n, count + 1])         
        }
    }
    return answer;
}