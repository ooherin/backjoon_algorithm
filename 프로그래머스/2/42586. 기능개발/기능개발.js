function solution(progresses, speeds) {
    //100이 되는 day를 정함
    const completedDays = new Array(progresses.length).fill(0);
    progresses.forEach((progress,index) => {
        let currentProgress = progress;
        while(currentProgress < 100){
            currentProgress += speeds[index];
            completedDays[index]++
        }
    })
    const days = completedDays;
    //순회하면서 뒤에 것들보다 크면 해당 값으로 바꿈
    for(let i = 0 ; i < completedDays.length; i++){
        for(let j = i; j < completedDays.length; j++){
            if(completedDays[i] > completedDays[j]){
                days[j] = completedDays[i];
            }
        }
    }
    const realCompletedDays = days.reduce((acc,day) => {
        acc[day] = (acc[day] || 0) + 1;
        return acc;
    },{})
    
    const answer = Object.values(realCompletedDays);
    return answer;
    //객체를 key 값으로 정렬하는 법
}