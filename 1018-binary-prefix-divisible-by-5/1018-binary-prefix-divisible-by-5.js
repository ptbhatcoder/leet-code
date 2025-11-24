/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let soFar = 0;
    const n = nums.length;
    const ans = new Array(n).fill(false);
    for(let i = 0; i < n; i++){
        soFar = (2 * soFar + nums[i]) % 5;
        ans[i] = !soFar;
    }
    return ans;
};