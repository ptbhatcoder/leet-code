const MOD = 7 + 10 ** 9;
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = Array.from({ length:m }, _ => Array.from({ length: n }, _ => new Array(k).fill(0)));
    dp[0][0][grid[0][0] % k] = 1;
    for(let r = 0; r < m; r++){
        for(let c = 0; c < n; c++){
            for(let s = 0; s < k; s++){
                const next = (s + grid[r][c]) % k;
                if(r > 0) dp[r][c][next] += dp[r-1][c][s];
                if(c > 0) dp[r][c][next] += dp[r][c-1][s];
                dp[r][c][next] %= MOD;
            }
        }
    }
    return dp[m - 1][n - 1][0];
};