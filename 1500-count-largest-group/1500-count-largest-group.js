const dSum = n => {
    if(n < 10) return n;
    return n % 10 + dSum(Math.floor(n / 10));
}
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const f = {};
    let max = 0;
    for(let i = 1; i <= n; i++){
        const s = dSum(i);
        f[s] = (f[s] || 0) + 1;
        max = Math.max(max, f[s]);
    }
    return Object.values(f).reduce((a, v) => {
        if(v === max) return a + 1;
        return a;
    }, 0);
};