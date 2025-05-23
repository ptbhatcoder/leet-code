/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {
    const n = nums.length;
    const diffs = Array.from({ length:n }, (_, i) => (nums[i] ^ k) - nums[i]); // represents how will change number after XOR
    diffs.sort((a, b) => b - a);

    let res = nums.reduce((acc, num) => acc + num, 0);

    for (let i = 0; i < n - 1; i += 2) {
        let diff = diffs[i] + diffs[i + 1]; // showing whether if would be beneficial if we XOR this two nodes 
        if (diff > 0) {
            res += diff;
        } else {
            break;
        }
    }

    return res;
};