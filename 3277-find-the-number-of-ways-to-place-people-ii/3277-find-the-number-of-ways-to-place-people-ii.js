/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    const n = points.length;
    points.sort((p1, p2) => (p1[0] - p2[0]) ||  (p2[1] -  p1[1]));
    let canPlace = 0;
    for(let i = 0; i < n; i++){
        const [xAlice, yAlice] = points[i];
        let fence = -Infinity;
        for(let j = i + 1; j < n; j++){
            const [xBob, yBob] = points[j];
            if(yBob > yAlice) continue;
            if(yBob > fence){
                canPlace++;
                fence = yBob;
            }
        }
    }
    return canPlace;
};