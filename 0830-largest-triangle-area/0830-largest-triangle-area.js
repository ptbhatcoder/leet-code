const findArea = (p1, p2, p3) => {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const [x3, y3] = p3;
    return 0.5 * (x1*y2 + x2*y3 + x3*y1 - x1*y3 - x2*y1 - x3*y2); 
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let max = 0;
    for(const p of points){
        for(const q of points){
            for(const r of points){
                max = Math.max(max, findArea(p, q, r));
            }
        }
    }
    return max;
};