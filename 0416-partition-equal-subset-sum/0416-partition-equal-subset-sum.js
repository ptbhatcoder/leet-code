/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const n = nums.length;
    const total = nums.reduce((s, a) => s + a);
    if(total & 1) return false;

    const target = total >> 1;
    const m = 1 + target;
    const dp = Array.from({ length: n + 1 }, _ => new Array(m).fill(false));
    dp[0][0] = true;
    for(let i = 1; i <= n; i++){
        for(let j = 0; j < m; j++){
            dp[i][j] = dp[i-1][j];
            if(j >= nums[i-1]){
                dp[i][j] ||= dp[i-1][j-nums[i-1]];
            }
        }
    }
    return dp.at(-1).at(-1);
};