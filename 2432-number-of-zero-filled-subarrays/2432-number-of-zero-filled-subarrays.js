/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let ans = 0;
    let span = 0;
    const compute = () => {
        const add = span * (span + 1);
        ans += (add / 2);
        span = 0;
        return ans;
    }
    for(const num of nums){
        if(num === 0) span++;
        else compute();
    }
    return compute();
};