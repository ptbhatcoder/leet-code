const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
];


/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if(!matrix.length || !matrix[0].length) return [];
    const m = matrix.length, 
          n = matrix[0].length,
          pacificVisit = [],
          atlanticVisit = [],
          pacificQ = [],
          atlanticQ = [];
    for(let i = 0; i < m ; i++){
        const p = [], q = [];
        for(let j = 0; j < n; j++){
            p.push(false);
            q.push(false);
        }
        pacificVisit.push(q);
        atlanticVisit.push(p);
    }
   
    
    for(let i = 0; i < m; i++){
        pacificQ.push([i, 0]);
        atlanticQ.push([i, n-1]);
        pacificVisit[i][0] = true;
        atlanticVisit[i][n-1] = true;
    }
    
    for(let i = 0; i < n; i++){
        pacificQ.push([0, i]);
        atlanticQ.push([m-1, i]);
        pacificVisit[0][i] = true;
        atlanticVisit[m-1][i] = true;
    }
    
    const bfs = (queue, visited) => {
        let q = queue;
        while(q.length){
            const next = [];
            
            for(const [curX, curY] of q){
                visited[curX][curY] = true;
                for(const [dirX, dirY] of dirs){
                    const x = curX + dirX;
                    const y = curY + dirY;
                    if(x < 0 
                       || x >= m 
                       || y < 0 
                       || y >= n 
                       || visited[x][y] 
                       || matrix[x][y] < matrix[curX][curY]) 
                        continue;
                    next.push([x,y]);
                }
            }
            q = next;
        }
    }
    
    bfs(pacificQ, pacificVisit);
    bfs(atlanticQ, atlanticVisit);
    
    const res = [];
    for(let i = 0; i < m; i++)
        for(let j = 0; j < n; j++)
            if(atlanticVisit[i][j] && pacificVisit[i][j])
                res.push([i,j]);
    return res;
};