/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    const n = s.length;
    const ans = new Array(n);
    const gap = 2 * numRows - 2;
    let k = 0;
    for(let r = 0; r < numRows; r++){
        const right = 2 * r;
        const left = gap - right;
        const spaces = [left, right];
        for(let i = r, s_i = 0, p = -1; i < n; p = i, i += spaces[s_i], s_i = (s_i + 1) % spaces.length){
            const c = s[i];
            if(i !== p){
                ans[k++] = c;
            }
        }
    }
    return ans.join('');
};