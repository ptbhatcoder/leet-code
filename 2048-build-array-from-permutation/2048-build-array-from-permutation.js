/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const n = nums.length;
    for(let i = 0; i < n; i++) nums[i] += (((nums[nums[i]]) % n) * n);
    for(let i = 0; i  < n; i++) nums[i] = Math.floor(nums[i] / n);
    return nums; 
};