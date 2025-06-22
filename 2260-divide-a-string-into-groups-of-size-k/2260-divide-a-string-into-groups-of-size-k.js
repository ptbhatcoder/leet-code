/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    const n = s.length;
    const len = Math.ceil(n/k);
    const res = new Array(len);
    for(let g = 0; g < len; g++){
        const start = g * k;
        let cand = s.slice(start, start+k);
        if(cand.length < k){
            const filler = new Array(k - cand.length).fill(fill).join('');
            cand = cand + filler;
        }
        res[g] = cand;
    }
    return res;
};