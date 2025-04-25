/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, m, k) {
    const n = nums.length;
    let res = 0;
    const f = {}
    const offset = m - k;
    let acc = 0;
    for(let i = 0; i < n; i++){
        if(nums[i] % m === k) acc++;
        const rem = acc % m;
        if(rem === k) res++;
        const key = (rem - k + m) % m;
        res += (f[key] || 0);
        f[rem] = (f[rem] || 0) + 1;
    }
    return res;
};