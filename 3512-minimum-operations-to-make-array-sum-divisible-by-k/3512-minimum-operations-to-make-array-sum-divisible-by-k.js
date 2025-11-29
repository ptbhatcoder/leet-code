/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const n = nums.length;
    let s = 0;
    for(let i = 0; i < n; i++) s+=nums[i];
    return s%k;
};