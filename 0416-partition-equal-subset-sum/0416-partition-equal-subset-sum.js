/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const n = nums.length;
    let total = 0;
    for(const num of nums) total += num;
    if(total & 1) return false;

    total /= 2;
    total++;
    const dp = Array.from({ length: n + 1 }, _ => new Array(total).fill(false));
    dp[0][0] = true;
    for(let i = 1; i <= n; i++){
        for(let j = 0; j < total; j++){
            dp[i][j] = dp[i-1][j];
            if(j >= nums[i-1]){
                dp[i][j] ||= dp[i-1][j-nums[i-1]];
            }
        }
    }
    return dp.at(-1).at(-1);
};