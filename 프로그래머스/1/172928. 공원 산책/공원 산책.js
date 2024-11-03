function solution(park, routes) {
    //location : S의 위치 [x,y]
    //routes를 돌면서 해당 위치로 옮겼을 때 조건에 부딪치는지 확인
    //조건에 안부딪치면 go
    
    //조건 
    //1. 미로 바깥으로 가는가? 
    //2. 장애물인가
    
    //부딪치면 무시한다. 
    
    const yLength = park.length;
    const xLength = park[0].length;
    
    let location;
    for(let i = 0; i < park.length ; i++){
        for(let j = 0; j < park[i].length; j++){
            if(park[i][j] === "S") {
                location = [i,j];
                break;
            }
        }
    }


    const ROUTE_MOVE = {
        N:[-1,0],
        S:[1,0],
        E:[0,1],
        W:[0,-1]
    }
    
    const routesMove = routes.map((route) => route.split(' '));
    routesMove.forEach((routeMove) => {
        const [route,move] = routeMove;
        
        let currentLocation = location;
        let isValid = true
        for(let i = 0; i < move; i++){
             const [moveY,moveX] = ROUTE_MOVE[route]
              const [y,x] = [currentLocation[0] + moveY, currentLocation[1] + moveX ];
              if(y >= 0 && y <= yLength - 1 && x >= 0 && x <= xLength - 1 && park[y][x] !== "X"){
                 currentLocation =  [y,x]   
              }else{
                  isValid = false
                  return;
              }
        }
        
        if(isValid) location = currentLocation;
    })

    return location;
}