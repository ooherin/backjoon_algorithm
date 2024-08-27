function solution(x, y, n) {
    const queue = [[y,0]];
    let answer = -1;

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