function solution(friends, gifts) {
    //친구들의 선물 지수 구하기
    const obj = friends.reduce((acc,cur) => {
        acc[cur] = 0
        return acc;
    }  ,{})
    
    const answer = friends.reduce((acc,cur) => {
        acc[cur] = 0
        return acc;
    }  ,{})
    
    gifts.forEach((gift) => {
        const [giver,receiver] = gift.split(' ');
        obj[giver] = obj[giver] + 1
        obj[receiver] = obj[receiver] - 1
    })
    let arr = [];
    for(let i = 0; i < friends.length ; i++){
        for(let j = i + 1 ; j < friends.length; j++){
            const iGiveStr =  [friends[i],friends[j]].join(' ');
            const jGiveStr = [friends[j],friends[i]].join(' ');
            const iGiveNum = gifts.filter((gift) => gift === iGiveStr).length;
            const jGiveNum = gifts.filter((gift) => gift === jGiveStr).length;
            if((!iGiveNum && !jGiveNum) || (iGiveNum == jGiveNum)){
                if(obj[friends[i]] > obj[friends[j]]){
                  answer[friends[i]]++;
                }else if(obj[friends[i]] < obj[friends[j]]){
              answer[friends[j]]++;
                }else{}
            }else{
                if(iGiveNum > jGiveNum){
                  answer[friends[i]]++;
                }else{
                 answer[friends[j]]++;
                }           
            }
        }
    }
    return Math.max(...Object.values(answer));
}