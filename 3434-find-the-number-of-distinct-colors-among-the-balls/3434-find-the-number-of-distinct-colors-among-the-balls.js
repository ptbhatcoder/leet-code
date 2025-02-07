/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    const colors = {};
    const balls = {};
    let uniq = 0;
    const result = queries.map(_ => 0);
    for(let i = 0; i < queries.length; i++){
        const [ball, color] = queries[i];
        const curColor = balls[ball];
        if(curColor) {
            colors[curColor]--;
            if(colors[curColor] <= 0){
                colors[curColor] = 0;
                uniq--;
            }
        } 
        
        if(!colors[color]) {
            uniq++;
            colors[color] = 0;
        }

        colors[color]++;
        balls[ball] = color;
        result[i] = uniq;
    }
    return result;
};