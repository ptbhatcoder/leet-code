/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let max = 1;
    for(let i = 1, inc = 1, dec = 1; i < nums.length; i++){
        const cur = nums[i];
        const prev = nums[i-1];
        if(cur < prev){
            inc = 1;
            dec++;
        } else if(prev < cur) {
            dec = 1;
            inc++;
        } else {
            inc = 1;
            dec = 1;
        }
        max = Math.max(max, inc, dec);
    }
    return max;
};