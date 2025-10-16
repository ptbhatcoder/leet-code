/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
    const n = nums.length;
    const f = new Array(value).fill(0);
    for(const num of nums){
        const offset = (value + num % value) % value;
        f[offset]++;
    }
    for(let cand = 0; cand < n; cand++){
        const offset = cand % value;
        f[offset]--;
        if(f[offset] < 0) return cand;
    }
    return n;
};