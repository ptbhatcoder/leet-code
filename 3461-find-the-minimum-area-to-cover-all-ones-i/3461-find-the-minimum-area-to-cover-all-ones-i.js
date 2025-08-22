/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    const m = grid.length, n = grid[0].length;
    let bottom = 0, top = m - 1, right = 0, left = n - 1;

    for(let r = 0; r < m; r++){
        for(let c = 0; c < n; c++){
            if(grid[r][c]){
                bottom = Math.max(bottom, r);
                top = Math.min(top, r);
                left = Math.min(left, c);
                right = Math.max(right, c);
            }
        }
    }

    return (right + 1 - left) * (bottom + 1 - top);
};