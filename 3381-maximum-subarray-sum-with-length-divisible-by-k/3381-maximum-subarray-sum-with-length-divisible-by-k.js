/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function(nums, k) {
    const n = nums.length;
    const min = new Array(k).fill(Infinity);
    let pre = 0;
    let ans = -Infinity;
    for(let i = 0; i < n; i++){
        const num = nums[i];
        pre += num;
        const l = 1 + i;
        const key = l % k;
        if(!key){
            ans = Math.max(ans, pre);
        }
        const minSoFar = min[key];
        if(minSoFar < Infinity){
            ans = Math.max(ans, pre - minSoFar);
        }

        min[key] = Math.min(minSoFar, pre);
    } 
    return ans;
};