/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    nums.sort((a, b) => a - b);
    const [a, b, c] = nums;
    if(c >= (a + b)) return "none";
    if(a === b && b === c) return "equilateral";
    else if(a === b || b === c || a === c) return "isosceles";
    return "scalene";
};