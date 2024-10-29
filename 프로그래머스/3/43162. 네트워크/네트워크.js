function solution(n, computers) {
  //하나씩 순회해서 서로 연결되어 있지 않고
  //연결된 다른 숫자가 그 컴퓨터에 연결되어 있지 않은 경우
  // + 1
  var answer = 0;
  let networks = Array.from({ length: computers.length }).map((e) => []);

  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers.length; j++) {
      if (computers[i][j]) {
        networks[i].push(j);
      }
    }
  }

  const visited = new Array(computers.length).fill(false);

  const dfs = (index) => {
    const currentNetworks = networks[index];
    for (const linkedNode of currentNetworks) {
      if (visited[linkedNode]) continue;
      visited[linkedNode] = true;
      dfs(linkedNode);
    }
  };

  for (let i = 0; i < networks.length; i++) {
    if (visited[i]) continue;
    dfs(i); //networks[i] : 그 노드에 연결된 노드
    answer++;
  }
  return answer;
}
