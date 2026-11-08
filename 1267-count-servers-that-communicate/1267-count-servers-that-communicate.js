/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);
    for(let r = 0; r < m; r++){
        for(let c = 0; c < n; c++){
            if(grid[r][c]){
                rows[r]++;
                cols[c]++;
            }
        }
    }
    let ans = 0;
    for(let r = 0; r < m; r++){
        for(let c = 0; c < n; c++){
            if(grid[r][c] && (rows[r] + cols[c]) > 2) ans++;
        }
    }
    return ans;
};