/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let ans = 1;
    const n = prices.length;
    for(let i = 1, cur = 1; i < n; i++){
        if(prices[i] === prices[i-1] - 1) cur++;
        else cur = 1;
        ans += cur;
    }
    return ans;
};