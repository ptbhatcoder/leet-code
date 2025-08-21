const arrSum = arr => {
    let cur = 0;
    let ans = 0;
    const n = arr.length;
    for(let i = 0; i < n; i++){
        cur = arr[i] === 0 ? 0 : cur + 1;
        ans += cur;
    }
    return ans;
}
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
    const m = mat.length, n = mat[0].length;
    let ans = 0;
    for(let top = 0; top < m; top++){
        const compressed = new Array(n).fill(1);
        for(let bottom = top; bottom < m; bottom++){
            for(let c = 0; c < n; c++) compressed[c] &= mat[bottom][c];
            ans += arrSum(compressed);
        }
    }
    return ans;
};