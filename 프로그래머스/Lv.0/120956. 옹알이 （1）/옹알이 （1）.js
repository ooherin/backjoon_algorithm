function solution(babbling) {
    const babbles = [];
    var answer = 0;
    const words = ["aya","ye","woo","ma"];
    const changed = babbling.map((babble) => {
        words.forEach((word,index) => {
            babble = babble.replace(word,index)
        })
        const set = new Set([...babble]);
        const regex = /^[0-9]+$/
        if(set.size === babble.length && regex.test(babble)){
            answer++
        }
    })
    
    return answer;
}