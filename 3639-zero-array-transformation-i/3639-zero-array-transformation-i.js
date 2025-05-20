/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    const n = nums.length;
    const times = new Array(n).fill(0);
    for(const [s, e] of queries){
        times[s]++;
        if(e + 1 < n) times[e+1]--;
    }
    for(let i = 0, runner = 0; i < n; i++){
        runner += times[i];
        if(runner < nums[i]) return false;
    }
    return true;
};