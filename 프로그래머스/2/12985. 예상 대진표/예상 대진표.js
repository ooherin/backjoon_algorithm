function solution(n,a,b)
{
    let answer = 0;
    //다음 번호를 구하기 
    //A = 3,4 => 2 
    //A = 1,2, => 1
    let aNum = a;
    let bNum = b;
    
    while(aNum !== bNum){
        aNum = Math.ceil(aNum / 2);
        bNum = Math.ceil(bNum / 2);
        answer += 1;
    }
    return answer;
}