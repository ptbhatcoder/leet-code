const MOD = 7 + 10**9;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let l = 0, r = n - 1;
    let res = 0;

    const pows = new Array(n).fill(0);
    pows[0] = 1;
    for(let i = 1; i < n; i++) pows[i] = (pows[i-1] * 2) % MOD;

    while(l <= r){
        const val = nums[l] + nums[r];
        if(target >= val){
            res = (res + pows[r - l]) % MOD;
            l++;
        } else r--;
    }
    return res;
};