function solution(n)
{
    let location = n;
    let answer = 0;
   while(location  > 0){
       if(location % 2 == 0){
           location = location / 2
       }else{
           location = location - 1;
           answer += 1
       }
   }
    return answer;
}