/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let cand = -Infinity;
    const span = {};
    let prev = null, cur = 0;
    for(const num of nums){
        cand = Math.max(cand, num);
        if(prev !== num) cur = 0;
        cur++;
        span[num] = Math.max(span[num] || 0, cur);
        prev = num;
    }
    
    return span[cand];
};