/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function(s) {
    const n = s.length;
    let ones = 0;
    let ans = 0;
    for(let i = 0; i < n; i++){
        const c = s[i];
        if(c === '1') ones++;
        else if(i > 0 && s[i-1] === '1') ans += ones;
    }
    return ans;
};