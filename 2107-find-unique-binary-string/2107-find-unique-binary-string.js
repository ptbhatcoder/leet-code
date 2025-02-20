/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(0);
    for(let i = 0; i < n; i++){
        result[i] = nums[i][i] === '0' ? 1 : 0;
    }
    return result.join('');
};