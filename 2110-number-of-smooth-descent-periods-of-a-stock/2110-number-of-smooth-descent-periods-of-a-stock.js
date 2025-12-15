/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let ans = 0;
    const n = prices.length;
    for(let i = 0; i < n; i++){
        if(i > 0 && prices[i] === prices[i-1] - 1){
            cur++;
            ans += cur;
        } else {
            cur = 1;
            ans++
        }
    }
    return ans;
};