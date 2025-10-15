/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
    const n = nums.length;
    const lis = new Array(n);
    let prev = Infinity, span = 0;
    let max = 1;
    let last = n - 1;
    for(let i = n - 1; i >= 0; i--){
        const cur = nums[i];
        if(prev > cur) span++;
        else {
            span = 1;
            last = i;
        }
        prev = cur;
        lis[i] = span;
        const next = last +  1;
        if(next < n && lis[i] <= lis[next]) max = Math.max(max, Math.min(lis[i], lis[next]));
        if(lis[i] % 2 === 0) max = Math.max(max, lis[i] >> 1);
    }
    return max;
};