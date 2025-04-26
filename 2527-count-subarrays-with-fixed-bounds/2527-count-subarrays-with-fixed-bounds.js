/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
    let x = -1;
    let y = -1;
    let z = -1;
    let p = 0;
    let total = 0;

    for (let = 0; p < nums.length; p++) {
        if (nums[p] === minK) {
            x = p;
        }
        if (nums[p] === maxK) {
            y = p;
        }
        if (nums[p] > maxK || nums[p] < minK) {
            z = p;
        }
        total += Math.max(Math.min(x,y) - z, 0);
    }
    return total;
};