function solution(code) {
    var answer = '';
    let mode = 0;
    for(let i = 0 ; i < code.length ; i++){
        if(+code[i] === 1){
            mode =  mode === 1 ? 0 : 1;
            continue;
        }
        if(i % 2 === mode){
             answer += code[i]
        }
    }
    return answer.length ? answer : 'EMPTY';
}