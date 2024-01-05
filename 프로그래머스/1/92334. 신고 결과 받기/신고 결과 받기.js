function solution(id_list, report, k) {
    const uniqueReport = [...new Set(report)].map(e => e.split(' '));
    const complaintObj = uniqueReport.reduce((acc,cur) => {
        const [giver, receiver] = cur;
        acc[receiver] = (acc[receiver] || 0 ) + 1;
        return acc;
    },{})
    const stopIdArr = [];
    Object.keys(complaintObj).forEach((user) => {
        if(complaintObj[user] >= k){
            stopIdArr.push(user);
        }
    })
    //정지된 계정을 몇 번 신고했는지
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