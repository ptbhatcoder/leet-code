/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let ans = 0;
    const f = {};
    for(const [a, b]  of dominoes){
        const k = a < b ? `${a}#${b}` : `${b}#${a}`;
        if(k in f) ans += f[k];
        else f[k] = 0;
        f[k]++;
    }
    return ans;
};