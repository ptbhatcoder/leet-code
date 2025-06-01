/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let ans = 0;
    const firstMin = Math.max(0, n - limit - limit);
    const firstMax = Math.min(limit, n);
    for(let i = firstMin; i <= firstMax; i++){
        const secondMin = Math.max(0, n - i - limit);
        const secondMax = Math.min(limit, n - i);
        ans += (secondMax - secondMin + 1);
    }
    return ans;
};