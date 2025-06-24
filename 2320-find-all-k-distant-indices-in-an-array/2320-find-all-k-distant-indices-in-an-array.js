/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    const n = nums.length;
    let last = 0;
    const res = [];
    for(let i = 0; i < n; i++){
        if(nums[i] !== key) continue;
        for(last = Math.max(last, i - k); last < n && last <= i + k; last++) res.push(last);
    }
    return res;  
};