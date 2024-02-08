function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];

    cities.forEach((e, i)=> {
        cities[i] = e.toUpperCase();
    });

    cities.forEach(e => {

        let flag = cache.includes(e);

        // miss 5
        if(!flag) {
            cache.push(e);

            if(cache.length > cacheSize) {
                cache.shift();
            }

            answer += 5;
        }

        // hit 1
        else {
            cache = cache.filter((element) => element !== e);
            cache.push(e);

            answer += 1;
        }
    })

    return answer;
}
