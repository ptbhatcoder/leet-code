/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    for(let i = 0; i < n; i++){
        result[i] ^= +nums[i][i];
    }
    return result.join('');
};