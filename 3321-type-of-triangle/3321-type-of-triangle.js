/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    const [a, b, c] = nums;
    if(a === b && b === c) return "equilateral";
    let max = Math.max(...nums);
    if(max >= (a + b + c) / 2) return "none";
    if(a === b || b === c || c === a) return "isosceles";
    return "scalene";
};