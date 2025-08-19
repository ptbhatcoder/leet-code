/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let ans = 0;
    let span = 0;
    for(const num of nums){
        if(num === 0){
            span++;
            ans += span;
        } else span = 0;
    }
    return ans;
};