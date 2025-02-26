/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let pos = 0, neg = 0, max = 0;
    for(const num of nums){
        pos += num;
        neg += num;
        if(pos < 0) pos = 0;
        if(neg > 0) neg = 0;
        max = Math.max(max, pos, Math.abs(neg));
    }
    return max;
};