const MOD = 7 + 10**9;
const dp = new Array(1001).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
dp[3] = dp[2] + dp[1] + dp[0] + dp[0];
for(let i = 4; i <= 1000;  i++){
    dp[i] = 2 * dp[i-1] + dp[i-3];
    dp[i] %= MOD;
}
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    return dp[n];
};