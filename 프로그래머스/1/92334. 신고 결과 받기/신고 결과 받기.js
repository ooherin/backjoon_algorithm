function solution(id_list, report, k) {
    const uniqueReport = [...new Set(report)].map(e => e.split(' '));
    //신고 받은 횟수 정리한 obj
    const complaintObj = uniqueReport.reduce((acc,cur) => {
        const [giver, receiver] = cur;
        acc[receiver] = (acc[receiver] || 0 ) + 1;
        return acc;
    },{})
    //신고로 정지당한 이름이 담긴 arr
    const stopIdArr = [];
    Object.keys(complaintObj).forEach((user) => {
        if(complaintObj[user] >= k){
            stopIdArr.push(user);
        }
    })
    //id_list로 모든 사람들을 순회했지만, 사람이 아닌 신고한 사람을 기준으로(report) 순회했다면 
    //더 편리했을 것
    const answer = id_list.map((id) => {
        let mails = 0;
        const myReport = uniqueReport.filter((e) => e[0] === id).map((e) => e[1] )
        myReport.forEach((e) => {
            if(stopIdArr.includes(e)){
                mails++;
            }
        })
        return mails;
    })
    return answer;
}

//다른 사람 풀이 
//map 과 set 을 사용한 풀이법 
function solution(id_list, report, k) {
    //set을 사용해 겹치는 string 제거
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    //map을 사용해 간단하게 {이름 : 숫자 } 형식 만들기
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    //리포트를 하나씩 돌려서 신고한 사람을 기준으로 
    //신고 받은 사람의 count 가 k개 이상이면 해당 good(메일)을 1 증가시켜줌.
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    //받은 메일이 있다면(good) 해당 메일 개수, 없으면 0개
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}
