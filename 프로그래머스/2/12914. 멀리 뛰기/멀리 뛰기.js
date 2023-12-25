function solution(n) {
    const MOD = 1234567;
    let answer = BigInt(1);

    // 가능한 2의 개수 구하기
    const twoCount = Math.floor(n / 2);
    let i = BigInt(1);

    while (i <= twoCount) {
        // 1의 개수
        const oneCount = BigInt(n) - BigInt(2) * i;
        answer += total(BigInt(n) - i) / (total(oneCount) * total(i));
        // 2의 개수
        i++;
    }

    return Number(answer % BigInt(MOD));
}

function total(n) {
    let i = BigInt(1);
    let answer = BigInt(1);
    while (i <= n) {
        answer *= i;
        i++;
    }
    return answer;
}