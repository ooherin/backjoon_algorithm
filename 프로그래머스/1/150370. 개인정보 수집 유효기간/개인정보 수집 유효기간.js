function solution(today, terms, privacies) {
  const termsObj = Object.fromEntries(terms.map((term) => term.split(' ')).map((e) => [e[0],Number(e[1])]));
    
 const expiredDatesArr = privacies.map((privacy) => privacy.split(' ')).map((privacy) => {
     const termMonth = termsObj[privacy[1]];
     return getExpiredDate(termMonth, privacy[0])
 })
 
 return expiredDatesArr.reduce((acc,cur, index) => {
     if(cur <= new Date(today)) {
         acc.push(index + 1)
     } 
     return acc;
 },[])
}

const getExpiredDate = (termMonth, date) => {
    let [year, month, day] = date.split('.').map(Number);
    month += termMonth - 1;
    if(month > 12){
        year += 1;
        month -= 12;
    }
    return new Date(year,month,day)
}
