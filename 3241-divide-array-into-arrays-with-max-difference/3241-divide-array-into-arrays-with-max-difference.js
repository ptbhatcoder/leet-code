/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const res = new Array(n/3);
    for(let i = 0; i <  n; i+= 3){
        const left = nums[i];
        const mid = nums[i+1];
        const right = nums[i+2];
        if(right - left > k) return [];
        res[i / 3] = [left, mid, right];
    }
    return res;
};