/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const f = new Array(101).fill(0);
    let mx = 0;
    let min = Infinity, max = -Infinity;
    for(const num of nums){
        f[num]++;
        mx = Math.max(mx, f[num]);
        min = Math.min(min, num);
        max = Math.max(max, num);
    }
    let c = 0;
    for(let num = min; num <= max; num++){
        if(f[num] === mx) c++;
    }
    return c * mx;
};