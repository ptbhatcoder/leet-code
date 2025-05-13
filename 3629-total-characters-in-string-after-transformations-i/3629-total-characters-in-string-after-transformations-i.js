const MOD = 7 + 10 ** 9;
/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    let f = new Array(26).fill(0);
    const n = s.length;
    for(let i = 0;i < n; i++) f[s.charCodeAt(i) - 97]++;
    for(let j = 0; j < t; j++){
        const c = new Array(26).fill(0);
        c[0] = (c[0] + f[25]) % MOD;
        c[1] = (c[1] + f[25]) % MOD;
        for(let i = 1; i < 26; i++) c[i] = (f[i-1] + c[i]) % MOD;
        f = c;
    }
    let res = 0;
    for(let i = 0; i < 26; i++) res = (res + f[i]) % MOD;
    return res;
};