

const combinations = (arr, n) => {
  if (n === 1) return arr.map((item) => [item]);
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const slicedArr = arr.slice(i + 1);
    const parts = combinations(slicedArr, n - 1);
    const combined = parts.map((part) => [arr[i], ...part].sort().join(''));
    result.push(...combined);
  }

  return result;
};

const solution = (orders, course) => {
  const answer = [];
  for (let i = 0; i < course.length; i++) {
    const orderCombinations = orders.map((order) => {
      return combinations([...order], course[i])
    });

    //조합의 개수를 더한 객체
    const totalCombinationsCount = {};

    orderCombinations.forEach((order) => {
      order.forEach((combination) => {
        if (totalCombinationsCount[combination]) {
          totalCombinationsCount[combination]++;
        } else {
          totalCombinationsCount[combination] = 1;
        }
      });
    });
      
    let max = 2;
      
    Object.keys(totalCombinationsCount).forEach((combination) => {
      if (max < totalCombinationsCount[combination]) {
         max = totalCombinationsCount[combination]
      }
    });
      
    Object.keys(totalCombinationsCount).forEach((combination) => {
      if ( max ===  totalCombinationsCount[combination] ) {
        answer.push(combination)
      }
    });
  }
  return answer.sort();
};

