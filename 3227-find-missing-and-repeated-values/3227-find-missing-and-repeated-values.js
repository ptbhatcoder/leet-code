/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const n = grid.length;
    const max = n * n;
    let missing = -1, extra = -1;
    for(let r = 0;  r < n; r++){
        for(let c = 0; c < n; c++){
            const val = grid[r][c];
            const index = val < 0 ? -val - 1: val -1;
            const vc = index % n;
            const vr = (index - vc) / n;
            if(grid[vr][vc] < 0){
                extra = 1 + index;
            } else {
                grid[vr][vc] = -grid[vr][vc];
            }
        }
    }
    for(let check = 1; check <= max && missing === -1; check++){
        const index = check - 1;
        const vc = index % n;
        const vr = (index - vc) / n;
        if(grid[vr][vc] > 0){
            missing = check;
        }
    }
    return [extra, missing];
};