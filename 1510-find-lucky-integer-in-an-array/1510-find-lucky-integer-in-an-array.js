/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const f = {};
    for(const c of arr)  f[c] = (f[c] || 0) + 1;
    let max = -1;
    for(const c of arr) if(f[c] === c) max = Math.max(max, c);
    return max;
};