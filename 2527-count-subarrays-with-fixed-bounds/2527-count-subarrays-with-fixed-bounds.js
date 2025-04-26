/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let bad = -1, iMin = -1, iMax = -1;
    let res = 0;
    const n = nums.length;
    for(let r = 0; r < n; r++){
        const num =  nums[r];
        if(num < minK || num > maxK) bad = r;
        if(num === minK) iMin = r;
        if(num === maxK) iMax = r;
        res += Math.max(0, Math.min(iMin, iMax) - bad);
    }
    return res;
};