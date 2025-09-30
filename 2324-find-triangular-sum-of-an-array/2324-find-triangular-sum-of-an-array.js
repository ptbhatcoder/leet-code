/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums){
    const n = nums.length;
    let last = n - 1;
    while(last > 0){
        for(let i = 0; i < last; i++){
            nums[i] += nums[i+1];
            nums[i] %= 10;
        }
        last--;
    }
    return nums[0];
};