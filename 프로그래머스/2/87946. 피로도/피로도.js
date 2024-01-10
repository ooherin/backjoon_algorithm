function solution(k, dungoens) {
  let answer = 0;
  const visited = Array.from({ length: dungoens.length }).map((e) => false);

  function DFS(hp, L) {
    for (let i = 0; i < dungoens.length; i++) {
      if (!visited[i] && dungoens[i][0] <= hp) {
        visited[i] = true;
        const leftHp = hp - dungoens[i][1];
        DFS(leftHp, L + 1);
        visited[i] = false;
      }
    }
    //기존의 answer와 비교해서 더 크면 L이 answer가 된다.
    answer = Math.max(answer, L);
  }
  DFS(k, 0);
  return answer;
}

