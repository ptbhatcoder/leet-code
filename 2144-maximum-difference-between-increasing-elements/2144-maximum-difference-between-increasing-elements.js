/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let res = -1;
    let min = Infinity;
    const n = nums.length;
    for(let i = 0; i < n; i++){
        const val = nums[i];
        res = Math.max(val - min, res);
        min = Math.min(min, val);
    }
    return res > 0 ? res : -1;
};