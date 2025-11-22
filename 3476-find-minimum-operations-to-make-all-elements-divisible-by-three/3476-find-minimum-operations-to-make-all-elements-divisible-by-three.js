/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let ans = 0;
    for(const num of nums){
        const offset = num % 3;
        const change = Math.min(offset, 3 - offset);
        ans += change;
    }
    return ans;
};