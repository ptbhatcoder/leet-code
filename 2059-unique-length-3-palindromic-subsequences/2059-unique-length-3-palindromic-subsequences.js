const chars = 'abcdefghijklmnopqrstuvwxyz';
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const l = {}, r = {};
    const n = s.length;
    for(let i = 0; i < n; i++){
        const c = s[i];
        if(!(c in l)) l[c] = i;
        r[c] = i;
    }
    let ans = 0;
    for(const c in l){
        const left = l[c];
        const right = r[c];
        ans += new Set(s.slice(left + 1, right)).size;
    }
    return ans;
};