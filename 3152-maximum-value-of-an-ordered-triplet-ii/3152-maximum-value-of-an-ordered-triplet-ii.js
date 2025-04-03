/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let max = 0;
    const n = nums.length;
    const pre = new Array(n).fill(0);
    const suf = new Array(n).fill(0);
    for(let i = 1; i < n; i++) pre[i] = Math.max(pre[i-1], nums[i-1]);
    for(let i = n - 2; i >= 0; i--) suf[i] = Math.max(suf[i+1], nums[i+1]);
    for(let j = 0; j < n; j++){
        max = Math.max(max, (pre[j] - nums[j]) * suf[j]);
    }
    return max;
};