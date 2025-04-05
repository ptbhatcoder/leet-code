/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    const n = nums.length;
    const xorSumFrom = (i, xorSoFar = 0) => {
        if(i >= n) return xorSoFar;
        const withVal = xorSumFrom(i + 1, xorSoFar ^ nums[i]);
        const withoutVal = xorSumFrom(i + 1, xorSoFar);
        return withVal + withoutVal;
    }
    return xorSumFrom(0);
};