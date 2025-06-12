/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    const n = nums.length;
    let max = Math.abs(nums[0] - nums[n-1]);
    for(let i = 1; i < n; i++) max = Math.max(max, Math.abs(nums[i] - nums[i-1]));
    return max;
};