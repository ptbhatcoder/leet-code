/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    const n = points.length;
    points.sort((p1, p2) => (p1[0] - p2[0]) || (p2[1] - p1[1]));
    let ans = 0;
    for(let i = 0; i < n; i++){
        const [ax, ay] = points[i];
        let floor = -Infinity;
        for(let j = i + 1; j < n; j++){
            const [bx, by] = points[j];
            if(by > ay) continue;
            if(by > floor){
                ans++;
                floor = by;
            }
        }
    }
    return ans;
};