function solution(want, number, discount) {
    var answer = 0;
    
        const wantObj = want.reduce((acc,cur,index) => {
            acc[cur] = number[index];
            return acc;
        },{})
        
        
    for(let i = 0; i < discount.length - 9; i++){
        const discountProducts = discount.slice(i, i+10);
        const discountObj = discountProducts.reduce((acc,cur) => {
            acc[cur] = (acc[cur] || 0) + 1;
            return acc;
        },{});
        
        if(isShallowEqual(wantObj, discountObj)){
             answer += 1;
        }
    }
    return answer;
}

const isShallowEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    
    if(obj1Keys.length !== obj2Keys.length) return false;
    
    for(const key of obj1Keys){
        const value1 = obj1[key];
        const value2 = obj2[key];
        
        if(value1 !== value2) return false;
    }
    return true;
}