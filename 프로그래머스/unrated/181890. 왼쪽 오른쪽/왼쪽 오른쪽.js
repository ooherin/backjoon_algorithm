function solution(str_list) {
    let stack = [];
    let i = 0;
    let answer = [];
    while(i < str_list.length){
        if( str_list[i] === 'l'){
    
           answer = str_list.slice(0, i)
            break;
        }else if(str_list[i] === 'r'){
 
            answer = str_list.slice(i+1);
            break;
        }
        i++;
    }
    return answer;
}