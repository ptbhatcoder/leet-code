/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
    const f = {};
    for(const c of word){
        if(!f[c]) f[c] = 0;
        f[c]++;
    }
    let res = Infinity;
    for(const c in f){
        let dels = 0;
        const fc = f[c];
        for(const oth in f){
            const foth = f[oth];
            if(foth < fc) dels += f[oth];
            else dels += Math.max(0, foth - k - fc);
        }
        res = Math.min(dels, res);
    }
    return res;
};