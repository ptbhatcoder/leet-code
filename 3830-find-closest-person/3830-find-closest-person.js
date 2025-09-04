/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const p1 = Math.abs(x - z), p2 = Math.abs(y - z);
    if(p1 === p2) return 0;
    return p1 < p2 ? 1 : 2;
};