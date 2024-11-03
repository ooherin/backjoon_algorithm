const solution = (n, computers) => {
  const networks = computers.map((e, index) => {
    const linked = [];
    e.forEach((other, otherIndex) => {
      if (other === 1) {
        linked.push(otherIndex);
      }
    });
    return linked;
  });
    
  const visited = new Array(n).fill(false);

  //트리를 순회하면서 해당 노드를 계속 찍기
  //만약 더이상 연결이 없으면 + 1
  let answer = 0;
    
  const dfs = (node) => {
    //현재 노드에서 연결된 노드 하나씩 다 탐색
      const currentNodeNetwork = networks[node];
      
          currentNodeNetwork.forEach((linkedNode) => {
          if(!visited[linkedNode]) {
              visited[linkedNode] = true
              dfs(linkedNode);   
          }
      })  
  }
  
  
  for(let i = 0 ; i < networks.length ;i++){
      if(visited[i]) continue;
      dfs(i);
      answer++;
  }
    
return answer
};

