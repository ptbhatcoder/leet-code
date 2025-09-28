/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a);
    const n = nums.length;
    let a = nums[0];
    let b = nums[1];
    let c = nums[2];
    let peri = a  + b + c;
    for(let i = 3; i < n; i++){
        if((a + b) > c && (b + c) > a && (c + a) > b) return peri;
        peri -= a;
        a = b;
        b = c;
        c = nums[i];
        peri += c;
    }
    return (a + b) > c && (b + c) > a && (c + a) > b ? peri : 0;
};