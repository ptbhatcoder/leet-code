
/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    const leadingZeroes = Math.clz32(n);
    const digits = 32 - leadingZeroes;
    return (1 << digits) - 1;
};