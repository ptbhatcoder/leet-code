/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    const colors = new Map;
    const balls = new Map;
    const result = queries.map(_ => 0);
    for(let i =0; i < queries.length; i++){
        const [ball, color] = queries[i];
        if(balls.has(ball)){
            const cur = balls.get(ball);
            const remaining = colors.get(cur) - 1;
            if(remaining > 0) colors.set(cur, remaining);
            else colors.delete(cur);
        }
        const count = colors.has(color) ? colors.get(color) : 0;
        balls.set(ball, color);
        colors.set(color, 1 + count);
        result[i] = colors.size;
    }
    return result;
};