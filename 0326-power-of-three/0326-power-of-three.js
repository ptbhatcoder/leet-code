const max = 3 ** 22;
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return n > 0 && (max % n) === 0;
};