/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function(nums, k) {
    nums.sort((a, b) => a - b);
    let lastAdded = -Infinity, count = 0;
    for(const num of nums){
        const lower = num - k;
        const upper = num + k;
        if(lastAdded < lower) {
            lastAdded = lower;
            count++;
        } else if(lastAdded < upper){
            lastAdded++;
            count++;
        }
    }
    return count;
};