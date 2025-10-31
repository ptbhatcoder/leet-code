/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const ans = [];
    const n = nums.length - 2;
    for(const num of nums){
        const key = num < 0 ? -num-1 : num;
        if(nums[key] < 0) ans.push(key);
        else nums[key] = -nums[key] - 1;
        if(ans.length >= 2) return ans;
    }
    return ans;
};