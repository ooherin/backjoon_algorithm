
function solution(phone_book) {
    const sorted = [...phone_book].sort();
    for(let i = 0; i < sorted.length - 1 ; i++){
        let nextStr = sorted[i + 1].substr(0,sorted[i].length);
        if(nextStr === sorted[i]){
            return false;
        }
    }
    return true;
}