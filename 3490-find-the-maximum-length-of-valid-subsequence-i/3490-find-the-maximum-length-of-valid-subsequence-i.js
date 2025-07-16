/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    const same = [0, 0], opp = [0, 0];
    for(const num of nums){
        const par = num & 1;
        same[par]++;
        opp[par] = 1 + opp[1 - par];
    }
    return Math.max(...same, ...opp);
};