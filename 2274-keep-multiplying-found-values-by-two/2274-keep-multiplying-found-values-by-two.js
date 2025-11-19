/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    const vals = new Set(nums);
    let cur = original;
    while(vals.has(cur)) cur = cur << 1;
    return cur;
};