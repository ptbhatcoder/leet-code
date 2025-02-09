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
        if(!(diff in diffFrequency)) diffFrequency[diff] = 0;
        valid += diffFrequency[diff];
        diffFrequency[diff]++;
    }
    return 0.5 * n * (n - 1) - valid;
};