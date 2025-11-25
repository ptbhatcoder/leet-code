/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    if([k % 2, k % 5].includes(0)) return -1;
    let cur = 0;
    for(let digits = 1; digits <= k; digits++){
        cur = (cur * 10 + 1) % k;
        if(cur === 0) return digits;
    }
    return -1;
};