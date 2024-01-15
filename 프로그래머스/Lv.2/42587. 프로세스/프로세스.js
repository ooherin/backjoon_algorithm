function solution(priorities, location) {
    const arr = [];
    const indexPriorities = priorities.map((e,i) => [i,e]);
    while(indexPriorities.length){
        const ele =  indexPriorities.shift();
        const elePriority = ele[1];
        const priorities = indexPriorities.map((e) => e[1]);
        if(priorities.every((priority) => priority <= elePriority)){
            arr.push(ele);
        }else{
            indexPriorities.push(ele)
        }
    }
    const target = arr.filter((e) => e[0] === location)[0];
    return arr.indexOf(target) + 1
}