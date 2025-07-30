/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let cand = -Infinity;
    for(const num of nums) cand = Math.max(cand, num);
    let cur = 0, max = 1;
    for(const num of nums){
        if(num === cand) {
            cur++;
            max = Math.max(max, cur);
        } else cur = 0;

    }
    return max;
};