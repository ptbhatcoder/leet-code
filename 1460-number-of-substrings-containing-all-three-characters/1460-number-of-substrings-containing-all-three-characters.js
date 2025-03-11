/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const indices = { a: -1, b : -1, c: -1 };
    const n = s.length;
    let res = 0;
    for(let i = 0; i < n; i++){
        indices[s[i]] = i;
        const min = Math.min(...Object.values(indices));
        if(min > -1) res += (min + 1);
    }
    return res;
};