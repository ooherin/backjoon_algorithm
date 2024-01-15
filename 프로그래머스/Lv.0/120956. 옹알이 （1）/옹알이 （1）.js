
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach(word => {
    if (regex.test(word)) answer++;  
  })

  return answer;
}

//원래 풀이
//단어가 반복되서 등장하는 경우는 없기에 굳이 같은 단어가 있는지를 확인하지 않아도 된다. 
function solution(babbling) {
    var answer = 0;
    const words = ["aya","ye","woo","ma"];
    const changed = babbling.map((babble) => {
        words.forEach((word,index) => {
            babble = babble.replace(word,index)
        })
        const regex = /^[0-9]+$/
        if(regex.test(babble)){
            answer++
        }
    })
    
    return answer;
}
