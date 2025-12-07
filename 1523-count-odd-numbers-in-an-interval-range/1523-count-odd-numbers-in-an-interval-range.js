/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    const count = high + 1 - low;
    const half = count >> 1;
   
    return count & 1 ?  half + (high & 1) : half;
};