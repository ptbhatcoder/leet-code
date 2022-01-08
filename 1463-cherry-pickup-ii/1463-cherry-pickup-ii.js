/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const m = grid.length, n = grid[0].length;
    const dp = [];
    for(let i = 0; i < m; i++){
        const m1 = [];
        for(let j = 0; j < n; j++){
            const m2 = [];
            for(let k = 0; k < n; k++){
                m2.push(-1);
            }
            m1.push(m2);
        }
        dp.push(m1);
    }
    
    const dfs = (r, c1, c2) => {
        if(r === m) return 0;
        if(dp[r][c1][c2] !== -1) return dp[r][c1][c2];
        let ans = 0;
        for(let i = -1; i <= 1; i++){
            for(let j = -1; j<= 1; j++){
                const nc1 = c1 + i, nc2 = c2 + j;
                if(nc1 >= 0 && nc1 < n && nc2 >= 0 && nc2 < n){
                    ans = Math.max(ans, dfs(r+1, nc1, nc2));
                }
            }
        }
        
        const cherries = c1 === c2 ? grid[r][c1] : grid[r][c1] + grid[r][c2];
        dp[r][c1][c2] = cherries + ans;
        return dp[r][c1][c2];
    }
    
    return dfs(0, 0, n - 1);
};