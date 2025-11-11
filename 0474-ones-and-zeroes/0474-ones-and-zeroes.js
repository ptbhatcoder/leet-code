/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const dp = Array.from({ length: 1 + m }, _ => Array.from({ length: 1 + n }, _ => 0));
    for(const str of strs){
        let ones = 0, zeroes = 0;
        for(const c of str){
            if(c === '1') ones++;
            else zeroes++;
        }
        for(let ze = m; ze >= zeroes; ze--){
            for(let on = n; on >= ones; on--){
                dp[ze][on] = Math.max(dp[ze][on], 1 + dp[ze - zeroes][on - ones]);
            }
        }
    }
    return dp[m][n];
};