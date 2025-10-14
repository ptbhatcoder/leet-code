/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    const n = nums.length;
    const lis = new Array(n).fill(1);
    let prev = Infinity;
    let span = 0;
    for(let i = n - 1; i >= 0; i--){
        if(prev <= nums[i]) span = 0;
        span++;
        lis[i] = span;
        prev = nums[i];
        if(i + k < n && lis[i] >= k && lis[i+k] >= k) return true;
    }
    return false;
};