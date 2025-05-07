/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {
    const rows = moveTime.length;
    const cols = moveTime[0].length;
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    const inbounds = (r,c) => r >= 0 && c >= 0 && r < rows && c < cols;
    const matrix = Array.from({length: rows}, () => Array(cols).fill(Infinity));
    let queue = [[0,0,0]];

    while (queue.length) {
        let temp = [];
        while (queue.length) {
            const [r,c,t] = queue.pop();
            if (matrix[r][c] <= t) continue;

            matrix[r][c] = t;
            for (const dir of dirs) {
                const ar = r + dir[0];
                const ac = c + dir[1];
                if (!inbounds(ar,ac)) continue;
                if (matrix[ar][ac] <= t + 1) continue;

                const at = (moveTime[ar][ac] >= t ? moveTime[ar][ac] : t) + 1;
                temp.push([ar,ac,at]);
            }
        }

        queue = temp;
    }

    return matrix[rows-1][cols-1];
};