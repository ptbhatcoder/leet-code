/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let max = 1;
    const n = nums.length;
    let and = 0;
    for(let r = 0, l = 0; r < n; r++){
        while((and & nums[r]) !== 0){
            and ^= nums[l];
            l++;
        }
        and |= nums[r];
        max = Math.max(max, r - l + 1);
    }
    return max;
};