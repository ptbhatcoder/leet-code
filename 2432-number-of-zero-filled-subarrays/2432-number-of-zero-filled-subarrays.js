/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let ans = 0;
    let span = 0;
    const n = nums.length;
    for(let i = 0; i < n; i++){
        const num = nums[i]
        if(num === 0){
            span++;
            ans += span;
        } else span = 0;
    }
    return ans;
};