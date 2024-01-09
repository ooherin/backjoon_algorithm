function solution(s) {
    let sliced = '},' + s.slice(1, s.length -1) + ',{'
    sliced = sliced.split('},{').filter(e => e.length > 0).map((str) => {
        let splited = str.split(',');
        return splited
    })
    sliced = sliced.map((arr) => arr.map((e) => Number(e)));
    const sorted = sliced.sort((a,b) => a.length - b.length);
    let set = new Set();
    sorted.forEach((arr,index) => {
        arr.forEach((e) => {
             set.add(e)
        })
    })
    return Array.from(set);
}

function solution(s) {
    return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
    .sort((a, b) => a.length - b.length)
    .reduce((arr, v, n) => {
        if (n) {
            return arr.concat(v.filter(f => !arr.includes(f)));
        }
        return v;
    }, []);
}
