/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    const [a, b, c] = nums;
    if(a === b && b === c) return "equilateral";
    let [max, o1, o2] = a > b ? a > c ? [a, b, c] : [c, a, b] : b > c ? [b, a, c] : [c, a, b];
    if(max >= (o1 + o2)) return "none";
    if(a === b || b === c || c === a) return "isosceles";
    return "scalene";
};