/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const f = {};
    for(const c of arr)  f[c] = (f[c] || 0) + 1;
    let max = -1;
    for(const k of Object.keys(f)){
        const c = +k;
         if(f[k] === c) max = Math.max(max, c);
    }
    return max;
};