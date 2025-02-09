/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    const diffFrequency = {};
    let valid = 0;
    const n = nums.length;
    for(let i = 0; i < n; i++){
        const diff = nums[i] - i;
        const cur = diffFrequency[diff] || 0;
        valid += cur;
        diffFrequency[diff] = 1 + cur;
    }
    return 0.5 * n * (n - 1) - valid;
};