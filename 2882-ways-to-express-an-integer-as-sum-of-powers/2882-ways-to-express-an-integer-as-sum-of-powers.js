const MOD = 7 + 10 ** 9;
/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
    const dp = new Array(1 + n).fill(0);
    dp[0] = 1;
    let pow;
    for(let cur = 1; (pow = cur ** x) <= n; cur++){
        for(let i = n; i >= pow; i--){
            dp[i] = (dp[i] + dp[i  - pow]) % MOD;
        }
    }
    return dp.at(-1);
};