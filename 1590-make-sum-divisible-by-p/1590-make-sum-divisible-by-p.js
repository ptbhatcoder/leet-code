/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    const n = nums.length;
    const last = {};
    let target = 0;
    for(let i = 0; i < n; i++){
        target = (target + nums[i]) % p;
    }
    if(target === 0) return 0;

    let s = 0;
    last[0] = -1;
    let ans = n;
    for(let i = 0; i < n; i++){
        const num = nums[i];
        s = (s + num) % p;
        last[s] = i;
        const tail = (s - target + p) % p;
        const start = last[tail] ?? -n;
        ans = Math.min(ans, i - start);
        
    }
    return ans < n ? ans : -1;
};