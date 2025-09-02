/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    let ans = 0;
    const n = points.length;
    for(let i = 0; i < n; i++){
        const [bx, by] = points[i];
        for(let j = 0; j < n; j++){
            if(j === i) continue;
            const [ax, ay] = points[j];
            let match = ax <= bx && ay >= by;
            for(let k = 0; match && k < n; k++){
                if([i, j].includes(k)) continue;
                const [cx, cy] = points[k];
                if(ax <= cx && cx <= bx && ay >= cy && cy >= by) match = false; 
            }
            if(match) ans++;
        }
    }
    return ans;
};