//장르별로 많이 재생된거 2개씩
//속한 노래가 많이 재생된 장르 먼저
//장르 내에서  많이 재생된 노래 먼저
//재생 횟수가 같다면 고유 번화가 낮은 노래 먼저

//장르별로 우선 재생 합산
//많으 들은순으로 sort
//장르안에서도 가장 많이 들은 순대로 sort후 2개 

function solution(genres, plays) {
    const answer = [];
    
    // const totalPlays = genres.reduce((acc,cur,index) => {
    //    acc[cur] = ( acc[cur] || 0 ) + plays[index];
    //     return acc;
    // },{})
    
    const totalPlays = {};
    const genresPlays = {};
    
   for(let i = 0; i < genres.length ;i++){
       totalPlays[genres[i]] = (totalPlays[genres[i]] || 0) +  plays[i];
       //배열이 있을 때 
       if(genresPlays[genres[i]]){
       genresPlays[genres[i]].push(i);
       }else{
        genresPlays[genres[i]] = [i];
       }
   }
    
    //totalPlays => sort 장르 정렬
    const sortedGenres = Object.keys(totalPlays).sort((a,b) => totalPlays[b] - totalPlays[a]);
    
 
    for(let genre of Object.keys(genresPlays)){
        genresPlays[genre] = genresPlays[genre].sort((a,b) =>  plays[b] - plays[a]).slice(0,2);     
    }
    
    
    for(let genre of sortedGenres){
        answer.push(...genresPlays[genre]);
    }

    return answer;
}