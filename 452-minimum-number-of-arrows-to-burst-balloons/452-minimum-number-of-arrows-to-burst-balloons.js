/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(!points.length){
        return 0;
    }
    points.sort(([a1,b1],[a2,b2]) => b1 - b2);
    let count = 1, pos = points[0][1];
    for(let i = 0;i < points.length;i++){
        if(points[i][0] <= pos && pos <= points[i][1]) continue;
        count++;
        pos = points[i][1];
    }
    
    return count;
};