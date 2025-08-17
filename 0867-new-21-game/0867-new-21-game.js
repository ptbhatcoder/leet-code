/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    if(k === 0 || n >= k + maxPts) return 1;
    const dp = new Array(1 + n).fill(0);
    let ans = 0, psum = 1;
    dp[0] = 1;
    for(let i = 1; i <= n; i++){
        dp[i] = psum / maxPts;
        if(i < k) psum += dp[i];
        else ans += dp[i];
        if(i >= maxPts) psum -= dp[i-maxPts];
    }
    return ans;
};