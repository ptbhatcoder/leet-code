/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const lastIndex = {};
    const n = s.length;
    for(let i = 0; i < n;  i++){
        lastIndex[s[i]] = i;
    }
    let start = 0, max = 0;
    const res = [];
    for(let i = 0; i < n; i++){
        max = Math.max(max, lastIndex[s[i]]);
        if(max === i){
            res.push(i + 1 - start);
            start = i + 1;
        }
    }
    return res;
};