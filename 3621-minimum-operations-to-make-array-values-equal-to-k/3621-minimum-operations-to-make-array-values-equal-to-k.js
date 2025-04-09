/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const gt = new Set;
    let cK = 0, hasLess = false;
    for(const num of nums){
        if(num < k) return -1;
        if(num > k) gt.add(num);
    }
    return gt.size;
};