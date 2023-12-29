function solution(want, number, discount) {
    var answer = 0;
    //10일 연속으로 일치할 경우 회원가입
    const countLength = discount.length - 10;

    let arr = [];
    for(let i = 0 ; i <= countLength ; i++ ){
        const discountArr = discount.slice(i , i + 10);
        const totalDiscount = discountArr.reduce((acc,cur) => {
            acc[cur] = (acc[cur] || 0 ) + 1;
            return acc;
        },{})
        
        const result = want.every((item,idx) => {
            return (totalDiscount[item] || 0) >= number[idx];
        })
        result && answer++;
    }
    return answer;
}