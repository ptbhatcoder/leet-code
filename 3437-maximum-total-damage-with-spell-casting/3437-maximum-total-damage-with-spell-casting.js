/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function(power) {
    const f = {};
    for(const p of power){
        if(!f[p]) f[p] = 0;
        f[p]++;
    }
    const powers = Object.keys(f);
    powers.sort((p1, p2) => p1 - p2);
    const n = powers.length;
    const dp = new Array(n).fill(0);
    dp[0] = powers[0] * f[powers[0]];
    let max = dp[0];
    for(let i = 1; i < n; i++){
        const val = powers[i];
        const strength = f[val] * val;
        dp[i] = dp[i-1];
        let s = 0; e = i - 1;
        let pos = -1;
        while(s <= e){
            const mid = s + ((e - s) >> 1);
            const cur = powers[mid];
            if(cur < val - 2){
                pos = mid;
                s = mid + 1;
            } else e = mid - 1;
        }
        if(pos >= 0) dp[i] = Math.max(dp[i], dp[pos] + strength);
        else dp[i] = Math.max(dp[i], strength)

        max = Math.max(max, dp[i]);
    }

    return max;
};