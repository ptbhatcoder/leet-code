/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const f = {};
    const n = nums.length;
    for(const val of nums){
        if(!(val in f)) f[val] = 0;
        f[val]++;
    }
    let max = 0;
    for(const val of nums){
        const next = val + 1;
        if(next in f) max = Math.max(max, f[next] + f[val]);
    }
    return max;
};