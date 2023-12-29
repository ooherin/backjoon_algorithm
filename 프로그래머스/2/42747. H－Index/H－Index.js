function solution(citations) {
    const sortedArr = citations.sort((a, b) => b - a);
    let citationsCount = 0;

    while (citationsCount < sortedArr.length) {
        if (sortedArr[citationsCount] <= citationsCount) {
            break;
        }
        citationsCount++;
    }

    return citationsCount;
}
