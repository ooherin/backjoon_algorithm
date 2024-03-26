function solution(numbers) {
    const sorted = numbers.sort((a,b) => {
        const StringA = String(a);
        const StringB = String(b);
        if(StringA.length === StringB.length){
            for(let i = 0 ; i< StringA.length; i++){
                const result = StringB[i].localeCompare(StringA[i]);
                if(result) return result;
            }
            return a -b;
        }else{
            const newA = StringA + StringB;
            const newB = StringB + StringA;
            return newB.localeCompare(newA)
        }
    })
    
    if(sorted[0] === 0) return '0';
    return sorted.join('')
}