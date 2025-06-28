/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const vals = nums.map((v, i) => [v, i]).sort((a, b) => b[0] - a[0]);
    return vals.slice(0, k).sort((a, b) => a[1] - b[1]).map(v => nums[v[1]]);
};