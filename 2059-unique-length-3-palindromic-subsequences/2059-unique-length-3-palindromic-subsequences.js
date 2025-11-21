/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const start = {}, end = {};
    const n = s.length;
    for(let i = 0; i < n; i++){
        const c = s[i];
        end[c] = i;
        if(c in start) continue;
        start[c] = i;
    }
    let ans = 0
    for(const c in start){
        const range = s.slice(start[c] + 1, end[c]);
        ans += new Set(range).size;
    }
    return ans;
};