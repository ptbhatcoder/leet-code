/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const n = nums.length;
    let cur = 0;
    let count = 0;
    for(let r = 0, l = 0; r < n; r++){
        cur += nums[r];
        while(k <= cur * (r - l + 1)){
            cur -= nums[l];
            l++;
        }
        count += (r - l + 1);
    }
    return count;
};