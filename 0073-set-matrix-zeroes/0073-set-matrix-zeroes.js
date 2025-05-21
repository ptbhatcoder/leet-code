/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    let row = false, col = false;
    for(let i = 0;i < m; i++) if(matrix[i][0] === 0) col = true;
    for(let i = 0;i < n; i++) if(matrix[0][i] === 0) row = true;
    for(let r = 0; r < m; r++){
        for(let c = 0; c < n; c++){
            if(matrix[r][c] === 0){
                matrix[r][0] = 0;
                matrix[0][c] = 0;
            }
        }
    }

    for(let r = 1; r < m; r++){
        for(let c = 1; c < n; c++){
            if(matrix[r][0] === 0 || matrix[0][c] === 0){
                matrix[r][c] = 0;
            }
        }
    }

    for(let i = 0;i < m && col; i++) matrix[i][0] = 0;
    for(let i = 0;i < n && row; i++) matrix[0][i] = 0;
    
};