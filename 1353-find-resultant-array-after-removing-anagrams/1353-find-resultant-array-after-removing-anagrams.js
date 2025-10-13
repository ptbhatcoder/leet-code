const areAnagrams = (w1, w2) => {
    if(w1.length !== w2.length) return false;
    const f1 = {}; const f2 = {};
    for(const c of w1) f1[c] = (f1[c] || 0) + 1;
    for(const c of w2) f2[c] = (f2[c] || 0) + 1;
    for(const c of w1) if(f1[c] !== f2[c]) return false;
    for(const c of w2) if(f1[c] !== f2[c]) return false;
    return true;
}
/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const ans = [];
    for(const word of words){
        if(ans.length === 0 || !areAnagrams(ans.at(-1), word)) ans.push(word);
    }
    return ans;
};