/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let ans = 0;
    let acc = neededTime[0], max = acc;
    const n = neededTime.length;
    let span = 1;
    for(let i = 1; i < n; i++){
        const cur = neededTime[i];
        if(colors[i] === colors[i-1]){
            max = Math.max(max, cur);
            acc += cur;
            span++;
        } else {
            if(span > 1){
                ans += (acc - max);
            }
            acc = cur;
            span = 1;
            max = cur;
        }
    }
    if(span > 1){
        ans += (acc - max);
    }
    return ans;
};