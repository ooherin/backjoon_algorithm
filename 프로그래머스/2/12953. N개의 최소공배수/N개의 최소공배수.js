function solution(arr) {
    const sortedArr= arr.sort((a,b) => a-b);
    let count = 1;
    let answer = sortedArr[0];
    while(count < arr.length){
        answer = answer * sortedArr[count] / GCD(answer,sortedArr[count])
        count++;
    }
    return answer;
}

function GCD(number1,number2){
    return number1 % number2 === 0 ? number2 : GCD(number2, number1 % number2)
}