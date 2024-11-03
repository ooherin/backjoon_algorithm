function solution(babbling) {
  const ableWords = ["aya", "ye", "woo", "ma"];

  const convertedWords = babbling.map((babbleWord) => {
    let result = babbleWord;
    let recentWord = "";
      
    while (result.length) {
      let found = false;

      for (const ableWord of ableWords) {
        if (result.startsWith(ableWord)) {
          if (recentWord === ableWord) {
            return result;
          } 
            result = result.slice(ableWord.length);
            recentWord = ableWord;
            found = true;
            break;
        }
      }
     if (!found) return result;
    }
    return result;
  });

  const answer = convertedWords.reduce((acc,cur) => {
    if (!cur.length) acc++;
    return acc;
  },0);

  return answer;
}
