function solution(n) {
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let currentDirection = 0;
  let count = 2;
  let [y, x] = [0, 0];
  
  const result = new Array(n).fill(0).map((e) => new Array(n).fill(0));
  result[0][0] = 1;
    
  while (count <= n * n) {
    const [dy, dx] = direction[currentDirection];
    const [cy, cx] = [y + dy, x + dx];
    if (cy < n && cy >= 0 && cx < n && cx >= 0 && result[cy][cx] === 0) {
      y = cy;
      x = cx;
      result[cy][cx] = count;
      count++;
    } else {
      currentDirection = (currentDirection + 1) % 4;
    }
  }

  return result;
}

