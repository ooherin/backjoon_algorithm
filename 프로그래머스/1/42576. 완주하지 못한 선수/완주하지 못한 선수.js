function solution(participant, completion) {
    const map = new Map();
    
    participant.forEach((person) => {
        map.set(person, (map.get(person) || 0)  + 1)
    });
    
    completion.forEach((person) => {
        map.set(person, (map.get(person) - 1));
    })
    
    for(const [key,value] of map){
        if(value > 0) return key
    }
}