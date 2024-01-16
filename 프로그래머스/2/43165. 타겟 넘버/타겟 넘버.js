function solution(numbers, target) {
    var answer = 0;
    
    DFS(0,0)
    function DFS(x, n){
        if(n === numbers.length){
            if(x === target){
               answer++
            }
            return 
        }
        
        DFS(x + numbers[n], n + 1)
        DFS(x - numbers[n], n + 1)
    }
    return answer;
}

