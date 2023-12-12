function solution(people, limit) {
    let answer = 0;
    const sortedPeople = people.sort((a,b) => a-b);
    
    let left = 0;
    let right = sortedPeople.length - 1;
    
    while (left <= right){
        if(sortedPeople[left] + sortedPeople[right] <= limit){
            left++;
        }
        right--;
        answer++;
    }
    
    return answer;
}