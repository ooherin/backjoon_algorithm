//순열
//arr중에 selectNumber 개 선택한다.
const getPermutations = (arr,selectNumber) => {
    const results = new Set();
    if (selectNumber === 0) return [[]]; 
    if(arr.length <= 1) return arr.map((e) => [e]);
    
    arr.forEach((fixed,index,origin) => {
        //고정 값을 뺀 나머지 요소들의 배열
        const rest = [...origin.slice(0,index), ...origin.slice(index + 1)];
        //나머지 요소배열에서 selectNumber -1 개의 순열을 구한다. 
        const restPermuatations = getPermutations(rest,selectNumber - 1)
        const fullPermuatations = restPermuatations.map((e) => [fixed,...e].join(''));
        fullPermuatations.forEach((e) => {
            if(!results.has(e))  results.add(e)
        })
    })
    
    return [...results];
}


function solution(numbers) {
    let answer = 0;
    //소수 판별 로직
    //기존 set 에 있는지 판별
    const demical = new Set();
    const ableNumbers = [...numbers];
    for(let i = 1; i <= numbers.length ; i++){
        const permutations =  getPermutations(ableNumbers,i).map((e) => Number(e)); 
        permutations.forEach((e) => {
            const permutation = Number(e);
            if(isDecimal(permutation) && !demical.has(e)){
                answer++;
                demical.add(e)
            }
        })
    }
    return answer;
}

const isDecimal = (number) => {
    if(number <= 1) return false;
    if(number === 2 || number === 3) return true;
    if(number % 2 === 0) return false;
    let answer = true;
    for(let i = 2 ; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            answer = false;
        }
    }
    return answer;
}
