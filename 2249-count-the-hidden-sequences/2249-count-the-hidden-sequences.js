/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
    let min = 0, max = 0;
    let cur = 0;
    for(const val of differences){
        cur += val;
        min = Math.min(min, cur);
        max = Math.max(max, cur);
    }
    return Math.max(0, upper - max - lower + min + 1);
};