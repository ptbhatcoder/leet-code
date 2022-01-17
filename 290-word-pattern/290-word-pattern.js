/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const words = str.split(' ');
    if(words.length !== pattern.length) return false;
    let k = 0;
    const patMap = {};
    for(let c of pattern){
        if(c in patMap) continue;
        patMap[c] = ++k;
    }
    
    const pk = k;
    k = 0;
    const wordMap = {};
    for(let word of words){
        if(word in wordMap) continue;
        wordMap[word] = ++k;
    }
    
    if(k !== pk) return false;
    
    const pat = [];
    for(const c of pattern){
        pat.push(patMap[c]);
    }
    
    const w = [];
    for(const word of words){
        w.push(wordMap[word]);
    }
    
    return pat.join('#') === w.join('#');
};