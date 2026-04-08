const MOD = 10**9 + 7;
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function(nums, queries) {
    for(const [l, r, k, v] of queries){
        for(let i = l; i <= r; i+=k){
            nums[i] = (nums[i] * v) % MOD;
        }
    }

    let ans = 0;
    for(const num of nums) ans ^= num;
    return ans;
};