/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    const lastIndex = nums.length -3;
    let res = 0;
    for(let i = 0; i <= lastIndex; i++){
        const mid = nums[i+1];
        if(!(mid & 1) && (nums[i] + nums[i + 2]) === (mid >> 1)) res++;
    }
    return res;
};