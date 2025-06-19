/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    let res = 0;
    let min = -Infinity;
    for(const c of nums){
        if(c - min > k){
            res++;
            min = c;
        }
    }
    return res;
};