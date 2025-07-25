/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    const uniq = new Set(nums);
    let max = -Infinity, psum = 0;
    for(const c of uniq){
        max = Math.max(max, c);
        if(c > 0) psum += c;
    }
    return max < 0 ? max :psum;
};