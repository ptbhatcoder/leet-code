const minArea = (grid, rt, rb, cl, cr) => {
    let l = cr, r = cl, b = rt, t = rb;
    let found = false;
    for(let row = rt; row <= rb; row++){
        for(let col = cl; col <= cr; col++){
            if(grid[row][col]){
                l = Math.min(l, col);
                r = Math.max(r, col);
                t = Math.min(t, row);
                b = Math.max(b, row);
                found = true;
            }
        }
    }
    return found ? (1 + r - l) * (1 + b - t) : 0;
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let ans = Infinity;
    let one = 0, two = 0, three = 0;
    for(let r = 0; r < m; r++){
        one = minArea(grid, 0, r, 0, n - 1);
        for(let c = 0; c < n; c++){
            two = minArea(grid, r + 1, m - 1, 0, c);
            three = minArea(grid, r + 1, m - 1, c + 1, n - 1);
            ans = Math.min(ans, one + two + three);
        }
    }

    for(let c = 0; c < n; c++){
        one = minArea(grid, 0, m - 1, c + 1, n - 1);
        for(let r = 0; r < m; r++){
            two = minArea(grid, 0, r, 0, c);
            three = minArea(grid, r + 1, m - 1, 0, c);
            ans = Math.min(ans, one + two + three);
        }
    }

    for(let r = 0; r < m; r++){
        one = minArea(grid, r + 1, m-1, 0, n - 1);
        for(let c = 0; c < n; c++){
            two = minArea(grid, 0, r, 0, c);
            three = minArea(grid, 0, r, c + 1, n - 1);
            ans = Math.min(ans, one + two + three);
        }
    }

    for(let c = 0; c < n; c++){
        one = minArea(grid, 0, m-1, 0, c);
        for(let r = 0; r < m - 1; r++){
            two = minArea(grid, 0, r, c + 1, n - 1);
            three = minArea(grid, r + 1, m - 1, c + 1, n - 1);
            ans = Math.min(ans, one + two + three);
        }
    }

    for(let r = 0; r < m; r++){
        for(let r2 = r + 1; r2 < m; r2++){
            one = minArea(grid, 0, r, 0, n - 1);
            two = minArea(grid, r + 1, r2, 0, n - 1);
            three = minArea(grid, r2 + 1, m - 1, 0, n - 1);
            ans = Math.min(ans, one + two + three);
        }
    }

    for(let c = 0; c < n; c++){
        for(let c2 = c + 1; c2 < n; c2++){
            one = minArea(grid, 0, m - 1, 0, c);
            two = minArea(grid, 0, m - 1, c + 1, c2);
            three = minArea(grid, 0, m - 1, c2 + 1, n - 1);
            ans = Math.min(ans, one + two + three);
        }
    }

    return ans;
};