/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    const m = grid.length;
    const n = grid[0].length;
    const l = m * n;
    const flat = new Array(l).fill(0);
    let i = 0;
    for(let r = 0; r < m; r++){
        for(let c = 0; c < n; c++){
            flat[i++] = grid[r][c];
        }
    }

    flat.sort((a, b) => a - b)

    const target = flat[l >> 1];
    let ops = 0;
    for(const c of flat){
        const distance = Math.abs(c - target);
        if(distance % x) return -1;

        const steps = distance / x;
        ops += steps;
    }
    return ops;
};