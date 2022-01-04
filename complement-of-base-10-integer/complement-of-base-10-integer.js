/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    return parseInt(N.toString(2).replace(/[01]/g, m => m === '0' ? '1' : '0') , 2);
};