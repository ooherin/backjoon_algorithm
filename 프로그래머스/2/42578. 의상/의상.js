function solution(clothes) {
    var answer = 0;
    const obj = clothes.reduce((acc,cur) => {
        acc[cur[1]] = (acc[cur[1]] || 0 )  + 1;
        return acc;
    },{})
    const sum = Object.values(obj).reduce((acc,cur) => {
        acc = acc * (cur + 1);
        return acc;
    },1)
    return sum - 1;
}