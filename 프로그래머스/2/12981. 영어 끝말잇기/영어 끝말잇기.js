function solution(n, words) {
    let answer = [0,0];
    const useWords = [words[0]];
    
    //n의 개수만큼 반복.
    count = 1;
    while(count < words.length){
        let lastWord = useWords[useWords.length - 1];
        let currentWord = words[count];
         if(currentWord[0] == lastWord[lastWord.length-1] && 
           !useWords.includes(currentWord)){
          useWords.push(currentWord);
            count++;
        }else{
            useWords.push(currentWord);
           const person = !(useWords.length % n) ? n : useWords.length % n ;
            const turn = Math.ceil(useWords.length / n) ;
            answer =  [ person, turn]
            break;
        }
    }
        return answer;
    }
    