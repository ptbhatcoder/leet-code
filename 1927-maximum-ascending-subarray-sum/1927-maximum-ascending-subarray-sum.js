/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let max = nums[0];
    for(let i = 1, sum = nums[0]; i < nums.length; i++){
        const cur = nums[i];
        if(nums[i-1] < cur) sum += cur;
        else sum = cur;
        max = Math.max(max, sum);
    }
    return max;
};