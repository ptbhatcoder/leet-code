/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let diff = 0, sqDiff = 0;
    const n = grid.length;
    for(let r = 0; r < n; r++){
        for(let c = 0; c < n; c++){
            const actual = grid[r][c];
            const target = 1 + c + r * n;
            diff += (actual - target);
            sqDiff += (actual * actual - target *  target);
        }
    }
    // sqDiff = extra * extra - missing * missing = (extra + missing)(extra - missing) = (extra + missing) * diff; => sum = sqDiff / diff;
    const sum = sqDiff / diff;
    const extra = 0.5 * (sum + diff);
    const missing = extra - diff;
    return [extra, missing];
};