/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let ans = 0;
    for(let r = 0; r < m; r++){
        for(let c = 0; c < n; c++){
            if(r > 0 && c > 0 && matrix[r][c] > 0){
                matrix[r][c] = 1 + Math.min(matrix[r-1][c], matrix[r-1][c-1], matrix[r][c-1]);
            }
            ans += matrix[r][c];
        }
    }
    return ans;
};