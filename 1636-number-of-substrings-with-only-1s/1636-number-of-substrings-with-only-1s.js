const MOD = 7 + 10 ** 9;
/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let ans = 0;
    let cur = 0;
    const n = s.length;
    for(let i = 0; i < n; i++){
        const c = s[i];
        if(c === '0') cur = 0;
        else {
            cur++;
            ans = (ans + cur) % MOD;
        }
    }
    return ans;
};