function solution(operations) {
    var answer = [];
    operations.forEach((operation) => {
        const [code,number] = operation.split(' ');
        if(code === 'I'){
            answer.push(Number(number))
        }
        if(operation === 'D -1'){
            answer.pop()
        };
        if(operation === 'D 1'){
            answer.shift()
        }
        answer = answer.sort((a,b) => b - a);    
    })
    if(!answer.length) return [0,0]
    return [answer[0], answer[answer.length - 1]];
}