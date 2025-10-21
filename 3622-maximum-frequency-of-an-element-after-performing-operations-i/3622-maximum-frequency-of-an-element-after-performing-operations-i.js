/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function(nums, k, numOperations) {
    const n = nums.length;
    const f = {};
    nums.sort((a,b) => a - b);
    for(const num of nums){
        if(!f[num]) f[num] = 0;
        f[num]++;
    }
    let l = 0, r = 0;
    let ans = 0;
    for(let mid = 0; mid < n; mid++){
        const num = nums[mid];
        while(num - nums[l] > k) l++;
        while(r < n - 1 && nums[r+1] - num <= k) r++;
        const count = r - l + 1;
        ans = Math.max(ans, Math.min(count - f[num], numOperations) +  f[num]);
    }
    l = 0;
    const twice = 2 * k;
    for(r = 0; r < n; r++){
        while(nums[l] + twice < nums[r]) l++;
        ans = Math.max(ans, Math.min(numOperations, r - l + 1));
    }
    return ans;
};