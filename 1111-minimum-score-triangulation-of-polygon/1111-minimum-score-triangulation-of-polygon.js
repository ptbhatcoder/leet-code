const createDp = n => {
    return Array.from({ length: n + 1 }, _ => {
        return Array.from({ length: n + 1 }, _ => 0);
    });
}
/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(values) {
    const n = values.length;
    const dp = createDp(n);
    for(let r = n - 1; r >= 0; r--){
        for(let c = r + 1; c < n; c++){
            for(let k = r + 1; k < c; k++){
                dp[r][c] = Math.min(dp[r][c] === 0 ? Infinity : dp[r][c], dp[r][k] + dp[k][c] + values[r] * values[k] * values[c]);
            }
        }
    }
    return dp[0][n-1];
};