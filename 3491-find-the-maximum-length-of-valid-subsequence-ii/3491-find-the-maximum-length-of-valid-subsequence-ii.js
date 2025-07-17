/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {
    const dp = Array.from({ length: k }, _ => new Array(k).fill(0));
    const n = nums.length;
    let res = 0;
    for(let i = 0; i < n; i++){
        const cur = nums[i] % k;
        for(let rem = 0; rem < k; rem++){
            const val = 1 + dp[rem][cur];
            dp[cur][rem] = val;
            res = Math.max(res, val);
        }
    }
    return res;
};