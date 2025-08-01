/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(n) {
    const res =  Array.from({ length: n }, (_, i) => new Array(i+1).fill(1));
    for(let r = 2; r < n; r++){
        const prev = res[r-1];
        const row = res[r];
        const l = prev.length;
        for(let i = 1; i < l; i++){
            row[i] = prev[i] + prev[i-1];
        }
    }
    return res;
};