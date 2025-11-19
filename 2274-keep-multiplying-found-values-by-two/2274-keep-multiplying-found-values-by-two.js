/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let cur = original;
    while(nums.includes(cur)) cur <<= 1;
    return cur;
};