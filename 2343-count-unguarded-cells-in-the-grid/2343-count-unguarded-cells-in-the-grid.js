const getKey = (r,c) => `r=${r}&c=${c}`;
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    const area = Array.from({ length:m }, _ => Array.from({ length: n }, _ => ''));
    for(let i = 0; i < walls.length; i++){
        const [wr, wc] = walls[i];
        area[wr][wc] = 'w';
    }

    for(let i = 0; i < guards.length; i++){
        const [gr, gc] = guards[i];
        area[gr][gc] = 'g';
    }
    for(let i = 0; i < guards.length; i++){
        const [gr, gc] = guards[i];
        for(let r = gr - 1; r>=0 && !['w','g'].includes(area[r][gc]); r--){
            area[r][gc] = 'v';
        }
        for(let r = gr + 1; r < m && !['w','g'].includes(area[r][gc]); r++){
            area[r][gc] = 'v';
        }
        for(let c = gc - 1; c >= 0 && !['w','g'].includes(area[gr][c]); c--){
            area[gr][c] = 'v';
        }
        for(let c = gc + 1; c < n && !['w','g'].includes(area[gr][c]); c++){
            area[gr][c] = 'v';
        }
    }
    let res = 0;
    for(let r = 0; r < m; r++){
        for(c = 0; c < n; c++){
            if(area[r][c] === '') res++;
        }
    }
    return res;

};