/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const result = new Array(n);
    const mid = n >> 1;
    for(let i = 0, cur = -mid ; i < n; i++, cur++){
        result[i] = cur;
        if(cur === -1 && !(n & 1)) cur++;
    }
    return result;
};