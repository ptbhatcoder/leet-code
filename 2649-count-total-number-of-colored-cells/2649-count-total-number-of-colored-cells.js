/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    if(n === 1) return 1;
    const repeat = 2 * n - 1;
    return 2 * n * n - repeat;
};